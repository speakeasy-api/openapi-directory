import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Customers:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def delete_consumer_v1_customers_subscriptions_id_(self, request: operations.DeleteConsumerV1CustomersSubscriptionsIDRequest) -> operations.DeleteConsumerV1CustomersSubscriptionsIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/subscriptions/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConsumerV1CustomersSubscriptionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_consumer_v1_customers_id_(self, request: operations.DeleteConsumerV1CustomersIDRequest) -> operations.DeleteConsumerV1CustomersIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConsumerV1CustomersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_consumer_v1_customers(self, request: operations.GetConsumerV1CustomersRequest) -> operations.GetConsumerV1CustomersResponse:
        r"""Returns a list of customers.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customer_list_view_model = out

        return res

    
    def get_consumer_v1_customers_bookingfields(self, request: operations.GetConsumerV1CustomersBookingfieldsRequest) -> operations.GetConsumerV1CustomersBookingfieldsResponse:
        r"""Returns a list of customer booking fields
        This end point returns Booking Field definitions.
        
        Customer booking fields are different than Appointment booking fields. Customer booking fields are
        stored with each customer. They are used when the information collected during the booking is specific
        to a particular visit.
        
        Use the field, and type to determine how to update field values
        in PUT /consumer/v1/appointments/{id}/book
        
        Customer Booking Fields include any custom customer fields you wish to capture with the Booking and also
        miscellaneous customer attributes including Company Name, Customer Demographic information and Address information.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers/bookingfields"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersBookingfieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingFieldListViewModel])
                res.booking_field_list_view_model = out

        return res

    
    def get_consumer_v1_customers_countries(self) -> operations.GetConsumerV1CustomersCountriesResponse:
        r"""Returns a list of country objects
        Returns a list of countries with the associated country code. Country codes are based on the 2 character ANSI standard.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers/countries"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.CountryViewModel]])
                res.country_view_models = out

        return res

    
    def get_consumer_v1_customers_customfields(self, request: operations.GetConsumerV1CustomersCustomfieldsRequest) -> operations.GetConsumerV1CustomersCustomfieldsResponse:
        r"""Returns a list of customField objects
        This end point returns your Customer custom field definitions.
        
        Customer custom fields are different than Appointment custom fields. Appointment custom fields are
        stored with each appointment. They are used when the information collected during the booking is specific
        to a particular visit, where as Customer custom fields are stored with the customer profile. 
        
        Use the key field, and type to determine how to update field values
        in POST /consumer/v1/customers and PUT /consumer/v1/customers/{id}
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers/customfields"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersCustomfieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomFieldDefinitionListViewModel])
                res.custom_field_definition_list_view_model = out

        return res

    
    def get_consumer_v1_customers_plans(self, request: operations.GetConsumerV1CustomersPlansRequest) -> operations.GetConsumerV1CustomersPlansResponse:
        r"""Returns a list of customers.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers/plans"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersPlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customer_plan_list_view_model = out

        return res

    
    def get_consumer_v1_customers_plans_id_(self, request: operations.GetConsumerV1CustomersPlansIDRequest) -> operations.GetConsumerV1CustomersPlansIDResponse:
        r"""Returns a customer object.
        The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
        or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/plans/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersPlansIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerPlanViewModel])
                res.customer_plan_view_model = out

        return res

    
    def get_consumer_v1_customers_states(self, request: operations.GetConsumerV1CustomersStatesRequest) -> operations.GetConsumerV1CustomersStatesResponse:
        r"""Returns a list of state objects
        Returns a list of states with the associated state code and country. 
        
        Contact us if states for your countries of operation are not currently loaded.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers/states"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersStatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.StateViewModel]])
                res.state_view_models = out

        return res

    
    def get_consumer_v1_customers_subscriptions(self, request: operations.GetConsumerV1CustomersSubscriptionsRequest) -> operations.GetConsumerV1CustomersSubscriptionsResponse:
        r"""Returns a list of customer subscriptions.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers/subscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customer_subscription_list_view_model = out

        return res

    
    def get_consumer_v1_customers_subscriptions_id_(self, request: operations.GetConsumerV1CustomersSubscriptionsIDRequest) -> operations.GetConsumerV1CustomersSubscriptionsIDResponse:
        r"""Returns a customer subscription object.
        The result returned is a single customer subscription object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/subscriptions/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersSubscriptionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerSubscriptionViewModel])
                res.customer_subscription_view_model = out

        return res

    
    def get_consumer_v1_customers_id_(self, request: operations.GetConsumerV1CustomersIDRequest) -> operations.GetConsumerV1CustomersIDResponse:
        r"""Returns a customer object.
        The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
        or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerViewModel])
                res.customer_view_model = out

        return res

    
    def get_consumer_v1_customers_id_planlimits_service_id_resource_id_date_time_tz_(self, request: operations.GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzRequest) -> operations.GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzResponse:
        r"""Returns a list of customer booking limits.
        The result returned is list of limit rules as defined by the subscribed customer plan along with Booking Counts/Minutes
        The results indicate the remaining bookings count / minutes. Use the results in your app to determine if the customer should continue booking.
        You can enforce Limits in periods: Daily,Weekly,Monthly and for maximum total limits. Maximum total limits is based on six months prior to
        the DateTimeTz and six months after the DateTimeTz. Daily, Weekly and Monthly limits are based on the calculated period relative to the
        subscription plan start. Daily,Weekly and Monthly limits can be setup on a per interval basis e.g. to biweekly, or daily every 10 days.
        See customer plans setup in the Portal for more information.
        All parameters are required. If resourceId is not applicable for a non-resource calendar, pass zero.
        Format of the dateTimeTz field is 2018-10-30T10:00-5:00
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/{id}/planlimits/{serviceId}/{resourceId}/{dateTimeTz}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.plan_limit_list_view_model = out

        return res

    
    def get_consumer_v1_customers_id_subscriptions(self, request: operations.GetConsumerV1CustomersIDSubscriptionsRequest) -> operations.GetConsumerV1CustomersIDSubscriptionsResponse:
        r"""Returns a customer subscription object.
        The result returned is a single customer subscription object. A customer can only be subsribed to a single Customer Plan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/{id}/subscriptions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersIDSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerSubscriptionViewModel])
                res.customer_subscription_view_model = out

        return res

    
    def post_consumer_v1_customers(self, request: operations.PostConsumerV1CustomersRequest) -> operations.PostConsumerV1CustomersResponse:
        r"""Creates a new customer object.
        Use this endpoint to create a new customer. If not specified the business location id defaults to the first location in the company.
        Email Address and a lastname are required for creating a new customer.
        Type 0 = Person, Type 1 = Business
        For type 0, the firstname and lastname fields are used. For type 1, the Name field is used and the name field is also used to populate the lastname.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConsumerV1CustomersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerViewModel])
                res.customer_view_model = out

        return res

    
    def post_consumer_v1_customers_id_subscriptions(self, request: operations.PostConsumerV1CustomersIDSubscriptionsRequest) -> operations.PostConsumerV1CustomersIDSubscriptionsResponse:
        r"""Creates a new customer subscription object.
        Use this endpoint to create a new customer subscription.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/{id}/subscriptions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConsumerV1CustomersIDSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerSubscriptionViewModel])
                res.customer_subscription_view_model = out

        return res

    
    def put_consumer_v1_customers_subscriptions_id_(self, request: operations.PutConsumerV1CustomersSubscriptionsIDRequest) -> operations.PutConsumerV1CustomersSubscriptionsIDResponse:
        r"""Updates a customer subscription object.
        Use this endpoint to update customer subscription information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/subscriptions/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1CustomersSubscriptionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_consumer_v1_customers_id_(self, request: operations.PutConsumerV1CustomersIDRequest) -> operations.PutConsumerV1CustomersIDResponse:
        r"""Updates a customer object.
        Use this endpoint to update customer information. If not specified the business location id defaults to the first location in the company.
        Blank fields are not changed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1CustomersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    