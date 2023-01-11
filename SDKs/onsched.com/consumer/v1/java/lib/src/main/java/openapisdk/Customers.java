package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Customers {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Customers(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    public openapisdk.models.operations.DeleteConsumerV1CustomersSubscriptionsIdResponse deleteConsumerV1CustomersSubscriptionsId(openapisdk.models.operations.DeleteConsumerV1CustomersSubscriptionsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/subscriptions/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteConsumerV1CustomersSubscriptionsIdResponse res = new openapisdk.models.operations.DeleteConsumerV1CustomersSubscriptionsIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteConsumerV1CustomersIdResponse deleteConsumerV1CustomersId(openapisdk.models.operations.DeleteConsumerV1CustomersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteConsumerV1CustomersIdResponse res = new openapisdk.models.operations.DeleteConsumerV1CustomersIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getConsumerV1Customers - Returns a list of customers.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetConsumerV1CustomersResponse getConsumerV1Customers(openapisdk.models.operations.GetConsumerV1CustomersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1CustomersResponse res = new openapisdk.models.operations.GetConsumerV1CustomersResponse() {{
            customerListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.customerListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1CustomersBookingfields - Returns a list of customer booking fields
     *
     * This end point returns Booking Field definitions.
     * 
     * Customer booking fields are different than Appointment booking fields. Customer booking fields are
     * stored with each customer. They are used when the information collected during the booking is specific
     * to a particular visit.
     * 
     * Use the field, and type to determine how to update field values
     * in PUT /consumer/v1/appointments/{id}/book
     * 
     * Customer Booking Fields include any custom customer fields you wish to capture with the Booking and also
     * miscellaneous customer attributes including Company Name, Customer Demographic information and Address information.
    **/
    public openapisdk.models.operations.GetConsumerV1CustomersBookingfieldsResponse getConsumerV1CustomersBookingfields(openapisdk.models.operations.GetConsumerV1CustomersBookingfieldsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/bookingfields");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1CustomersBookingfieldsResponse res = new openapisdk.models.operations.GetConsumerV1CustomersBookingfieldsResponse() {{
            bookingFieldListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BookingFieldListViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BookingFieldListViewModel.class);
                res.bookingFieldListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1CustomersCountries - Returns a list of country objects
     *
     * Returns a list of countries with the associated country code. Country codes are based on the 2 character ANSI standard.
    **/
    public openapisdk.models.operations.GetConsumerV1CustomersCountriesResponse getConsumerV1CustomersCountries() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/countries");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1CustomersCountriesResponse res = new openapisdk.models.operations.GetConsumerV1CustomersCountriesResponse() {{
            countryViewModels = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CountryViewModel[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CountryViewModel[].class);
                res.countryViewModels = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1CustomersCustomfields - Returns a list of customField objects
     *
     * This end point returns your Customer custom field definitions.
     * 
     * Customer custom fields are different than Appointment custom fields. Appointment custom fields are
     * stored with each appointment. They are used when the information collected during the booking is specific
     * to a particular visit, where as Customer custom fields are stored with the customer profile. 
     * 
     * Use the key field, and type to determine how to update field values
     * in POST /consumer/v1/customers and PUT /consumer/v1/customers/{id}
    **/
    public openapisdk.models.operations.GetConsumerV1CustomersCustomfieldsResponse getConsumerV1CustomersCustomfields(openapisdk.models.operations.GetConsumerV1CustomersCustomfieldsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/customfields");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1CustomersCustomfieldsResponse res = new openapisdk.models.operations.GetConsumerV1CustomersCustomfieldsResponse() {{
            customFieldDefinitionListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomFieldDefinitionListViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomFieldDefinitionListViewModel.class);
                res.customFieldDefinitionListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1CustomersPlans - Returns a list of customers.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetConsumerV1CustomersPlansResponse getConsumerV1CustomersPlans(openapisdk.models.operations.GetConsumerV1CustomersPlansRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/plans");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1CustomersPlansResponse res = new openapisdk.models.operations.GetConsumerV1CustomersPlansResponse() {{
            customerPlanListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.customerPlanListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1CustomersPlansId - Returns a customer object.
     *
     * The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
     * or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
    **/
    public openapisdk.models.operations.GetConsumerV1CustomersPlansIdResponse getConsumerV1CustomersPlansId(openapisdk.models.operations.GetConsumerV1CustomersPlansIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/plans/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1CustomersPlansIdResponse res = new openapisdk.models.operations.GetConsumerV1CustomersPlansIdResponse() {{
            customerPlanViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomerPlanViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomerPlanViewModel.class);
                res.customerPlanViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1CustomersStates - Returns a list of state objects
     *
     * Returns a list of states with the associated state code and country. 
     * 
     * Contact us if states for your countries of operation are not currently loaded.
    **/
    public openapisdk.models.operations.GetConsumerV1CustomersStatesResponse getConsumerV1CustomersStates(openapisdk.models.operations.GetConsumerV1CustomersStatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/states");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1CustomersStatesResponse res = new openapisdk.models.operations.GetConsumerV1CustomersStatesResponse() {{
            stateViewModels = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StateViewModel[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StateViewModel[].class);
                res.stateViewModels = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1CustomersSubscriptions - Returns a list of customer subscriptions.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetConsumerV1CustomersSubscriptionsResponse getConsumerV1CustomersSubscriptions(openapisdk.models.operations.GetConsumerV1CustomersSubscriptionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/subscriptions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1CustomersSubscriptionsResponse res = new openapisdk.models.operations.GetConsumerV1CustomersSubscriptionsResponse() {{
            customerSubscriptionListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.customerSubscriptionListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1CustomersSubscriptionsId - Returns a customer subscription object.
     *
     * The result returned is a single customer subscription object.
    **/
    public openapisdk.models.operations.GetConsumerV1CustomersSubscriptionsIdResponse getConsumerV1CustomersSubscriptionsId(openapisdk.models.operations.GetConsumerV1CustomersSubscriptionsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/subscriptions/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1CustomersSubscriptionsIdResponse res = new openapisdk.models.operations.GetConsumerV1CustomersSubscriptionsIdResponse() {{
            customerSubscriptionViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomerSubscriptionViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomerSubscriptionViewModel.class);
                res.customerSubscriptionViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1CustomersId - Returns a customer object.
     *
     * The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
     * or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
    **/
    public openapisdk.models.operations.GetConsumerV1CustomersIdResponse getConsumerV1CustomersId(openapisdk.models.operations.GetConsumerV1CustomersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1CustomersIdResponse res = new openapisdk.models.operations.GetConsumerV1CustomersIdResponse() {{
            customerViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomerViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomerViewModel.class);
                res.customerViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTz - Returns a list of customer booking limits.
     *
     * The result returned is list of limit rules as defined by the subscribed customer plan along with Booking Counts/Minutes
     * The results indicate the remaining bookings count / minutes. Use the results in your app to determine if the customer should continue booking.
     * You can enforce Limits in periods: Daily,Weekly,Monthly and for maximum total limits. Maximum total limits is based on six months prior to
     * the DateTimeTz and six months after the DateTimeTz. Daily, Weekly and Monthly limits are based on the calculated period relative to the
     * subscription plan start. Daily,Weekly and Monthly limits can be setup on a per interval basis e.g. to biweekly, or daily every 10 days.
     * See customer plans setup in the Portal for more information.
     * All parameters are required. If resourceId is not applicable for a non-resource calendar, pass zero.
     * Format of the dateTimeTz field is 2018-10-30T10:00-5:00
    **/
    public openapisdk.models.operations.GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse getConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTz(openapisdk.models.operations.GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/{id}/planlimits/{serviceId}/{resourceId}/{dateTimeTz}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse res = new openapisdk.models.operations.GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse() {{
            planLimitListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.planLimitListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1CustomersIdSubscriptions - Returns a customer subscription object.
     *
     * The result returned is a single customer subscription object. A customer can only be subsribed to a single Customer Plan
    **/
    public openapisdk.models.operations.GetConsumerV1CustomersIdSubscriptionsResponse getConsumerV1CustomersIdSubscriptions(openapisdk.models.operations.GetConsumerV1CustomersIdSubscriptionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/{id}/subscriptions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1CustomersIdSubscriptionsResponse res = new openapisdk.models.operations.GetConsumerV1CustomersIdSubscriptionsResponse() {{
            customerSubscriptionViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomerSubscriptionViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomerSubscriptionViewModel.class);
                res.customerSubscriptionViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postConsumerV1Customers - Creates a new customer object.
     *
     * Use this endpoint to create a new customer. If not specified the business location id defaults to the first location in the company.
     * Email Address and a lastname are required for creating a new customer.
     * Type 0 = Person, Type 1 = Business
     * For type 0, the firstname and lastname fields are used. For type 1, the Name field is used and the name field is also used to populate the lastname.
    **/
    public openapisdk.models.operations.PostConsumerV1CustomersResponse postConsumerV1Customers(openapisdk.models.operations.PostConsumerV1CustomersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostConsumerV1CustomersResponse res = new openapisdk.models.operations.PostConsumerV1CustomersResponse() {{
            customerViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomerViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomerViewModel.class);
                res.customerViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postConsumerV1CustomersIdSubscriptions - Creates a new customer subscription object.
     *
     * Use this endpoint to create a new customer subscription.
    **/
    public openapisdk.models.operations.PostConsumerV1CustomersIdSubscriptionsResponse postConsumerV1CustomersIdSubscriptions(openapisdk.models.operations.PostConsumerV1CustomersIdSubscriptionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/{id}/subscriptions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostConsumerV1CustomersIdSubscriptionsResponse res = new openapisdk.models.operations.PostConsumerV1CustomersIdSubscriptionsResponse() {{
            customerSubscriptionViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomerSubscriptionViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomerSubscriptionViewModel.class);
                res.customerSubscriptionViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putConsumerV1CustomersSubscriptionsId - Updates a customer subscription object.
     *
     * Use this endpoint to update customer subscription information.
    **/
    public openapisdk.models.operations.PutConsumerV1CustomersSubscriptionsIdResponse putConsumerV1CustomersSubscriptionsId(openapisdk.models.operations.PutConsumerV1CustomersSubscriptionsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/subscriptions/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutConsumerV1CustomersSubscriptionsIdResponse res = new openapisdk.models.operations.PutConsumerV1CustomersSubscriptionsIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * putConsumerV1CustomersId - Updates a customer object.
     *
     * Use this endpoint to update customer information. If not specified the business location id defaults to the first location in the company.
     * Blank fields are not changed
    **/
    public openapisdk.models.operations.PutConsumerV1CustomersIdResponse putConsumerV1CustomersId(openapisdk.models.operations.PutConsumerV1CustomersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/customers/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutConsumerV1CustomersIdResponse res = new openapisdk.models.operations.PutConsumerV1CustomersIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}