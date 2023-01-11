import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Services:
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

    
    def delete_setup_v1_services_allocations_id_(self, request: operations.DeleteSetupV1ServicesAllocationsIDRequest) -> operations.DeleteSetupV1ServicesAllocationsIDResponse:
        r"""Delete a service allocation object
        Deletes a service allocation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/allocations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    def delete_setup_v1_services_block_id_(self, request: operations.DeleteSetupV1ServicesBlockIDRequest) -> operations.DeleteSetupV1ServicesBlockIDResponse:
        r"""Delete a service block object
        Deletes a service block.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/block/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def delete_setup_v1_services_bookingwindows_id_(self, request: operations.DeleteSetupV1ServicesBookingwindowsIDRequest) -> operations.DeleteSetupV1ServicesBookingwindowsIDResponse:
        r"""Permanently deletes bookingWindow object.
        Use this endpoint to permanently delete a bookingWindow.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/bookingwindows/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesBookingwindowsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_setup_v1_services_calendar_id_(self, request: operations.DeleteSetupV1ServicesCalendarIDRequest) -> operations.DeleteSetupV1ServicesCalendarIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/calendar/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesCalendarIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCalendarViewModel])
                res.service_calendar_view_model = out

        return res

    
    def delete_setup_v1_services_id_(self, request: operations.DeleteSetupV1ServicesIDRequest) -> operations.DeleteSetupV1ServicesIDResponse:
        r"""Deletes a service object.
        Use this endpoint to delete a service. The service is not permanently deleted and can be recovered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def delete_setup_v1_services_id_deleteimage(self, request: operations.DeleteSetupV1ServicesIDDeleteimageRequest) -> operations.DeleteSetupV1ServicesIDDeleteimageResponse:
        r"""Removes a service image
        Use this endpoint to delete a previously uploaded service image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/deleteimage", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesIDDeleteimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def get_setup_v1_services(self, request: operations.GetSetupV1ServicesRequest) -> operations.GetSetupV1ServicesResponse:
        r"""Returns a list of services.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/services"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_list_view_model = out

        return res

    
    def get_setup_v1_services_allocations_id_(self, request: operations.GetSetupV1ServicesAllocationsIDRequest) -> operations.GetSetupV1ServicesAllocationsIDResponse:
        r"""Get a service allocation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/allocations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    def get_setup_v1_services_blocks_id_(self, request: operations.GetSetupV1ServicesBlocksIDRequest) -> operations.GetSetupV1ServicesBlocksIDResponse:
        r"""Get a service block
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/blocks/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesBlocksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def get_setup_v1_services_bookingwindows_id_(self, request: operations.GetSetupV1ServicesBookingwindowsIDRequest) -> operations.GetSetupV1ServicesBookingwindowsIDResponse:
        r"""Get a booking window
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/bookingwindows/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesBookingwindowsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingWindowViewModel])
                res.booking_window_view_model = out

        return res

    
    def get_setup_v1_services_id_(self, request: operations.GetSetupV1ServicesIDRequest) -> operations.GetSetupV1ServicesIDResponse:
        r"""Returns a service object.
        The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
        or the GET consumer/v1/appointments end point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def get_setup_v1_services_id_allocations(self, request: operations.GetSetupV1ServicesIDAllocationsRequest) -> operations.GetSetupV1ServicesIDAllocationsResponse:
        r"""Returns a list of service allocations.
        This endpoint is used primarily for event booking. When you create service type events, you allocation specific occurrences of the event 
        against the service. 
        
        You can retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service
        pass in the service id.
        
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/allocations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDAllocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_allocation_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_services_id_availability(self, request: operations.GetSetupV1ServicesIDAvailabilityRequest) -> operations.GetSetupV1ServicesIDAvailabilityResponse:
        r"""Returns a list of weekly availability
        Use this endpoint to get weekly availability for a service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/availability", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAvailabilityViewModel])
                res.service_availability_view_model = out

        return res

    
    def get_setup_v1_services_id_blocks(self, request: operations.GetSetupV1ServicesIDBlocksRequest) -> operations.GetSetupV1ServicesIDBlocksResponse:
        r"""Returns a list of service blocks.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/blocks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDBlocksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_block_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_services_id_bookingwindows(self, request: operations.GetSetupV1ServicesIDBookingwindowsRequest) -> operations.GetSetupV1ServicesIDBookingwindowsResponse:
        r"""Returns a list of service booking windows.
        This endpoint is used to retrieve any booking windows related to the service
        
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/bookingwindows", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDBookingwindowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingWindowViewModel])
                res.booking_window_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_services_id_calendar(self, request: operations.GetSetupV1ServicesIDCalendarRequest) -> operations.GetSetupV1ServicesIDCalendarResponse:
        r"""Returns the linked calendar for the service
        Use this endpoint to get the linked calendar for the service.
        A service can only be linked to one calendar in a location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/calendar", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDCalendarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCalendarViewModel])
                res.service_calendar_view_model = out

        return res

    
    def get_setup_v1_services_id_resources(self, request: operations.GetSetupV1ServicesIDResourcesRequest) -> operations.GetSetupV1ServicesIDResourcesResponse:
        r"""Returns a list of resources for the specified service.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/resources", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_list_view_model = out

        return res

    
    def post_setup_v1_services(self, request: operations.PostSetupV1ServicesRequest) -> operations.PostSetupV1ServicesResponse:
        r"""Creates a new service object.
        Use this endpoint to create a new service. If not specified the business location id defaults to the first location in the company.
        The service Type defaults to 1 if not entered.
        The service Type can be one of the following values:
        1 = Appointment
        2 = Event
        3 = Meeting
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/services"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def post_setup_v1_services_bookingwindows(self, request: operations.PostSetupV1ServicesBookingwindowsRequest) -> operations.PostSetupV1ServicesBookingwindowsResponse:
        r"""Creates a new bookingWindow object.
        Use this endpoint to create a new bookingWindow.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/services/bookingwindows"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesBookingwindowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingWindowViewModel])
                res.booking_window_view_model = out

        return res

    
    def post_setup_v1_services_calendar(self, request: operations.PostSetupV1ServicesCalendarRequest) -> operations.PostSetupV1ServicesCalendarResponse:
        r"""Links the service to a calendar
        Use this endpoint to link a service to a calendar.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/services/calendar"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesCalendarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCalendarViewModel])
                res.service_calendar_view_model = out

        return res

    
    def post_setup_v1_services_id_allocations(self, request: operations.PostSetupV1ServicesIDAllocationsRequest) -> operations.PostSetupV1ServicesIDAllocationsResponse:
        r"""Create a new service allocation
        Creates a new service allocation. You must specify a StartDate and EndDate.
        A reason for the allocation is also required. This reason will display in the OnSched Portal Calendar.
        
        Service allocations are used primarily for event type services. The allocation represents an occurrence of an allocation.
        
        Service allocations can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
        
        Service allocations can be for a specific date range instance or set to repeat at a specified frequency.
        The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively. 
        
        Daily allocations will repeat for each day of the week for the date range specified.
        
        Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
        you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
        of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
        For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
        
        Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly block means that
        the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
        repeat every 10 days. The interval property applies to all repeat frequencies.
        
        Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
        the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
        
        Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in the EndDate field to indicate the repeating block
        should continue indefinitely.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/allocations", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesIDAllocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    def post_setup_v1_services_id_allocations_bulk(self, request: operations.PostSetupV1ServicesIDAllocationsBulkRequest) -> operations.PostSetupV1ServicesIDAllocationsBulkResponse:
        r"""Create new service allocations in bulk
        Creates new service allocations in bulk. Refer to documentation
        for creating a single Service Allocation POST /setup/v1/services/{id}/allocations
        for understanding how to populate the properties
        
        Use this endpoint only if you need to POST multiple allocations in one call
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/allocations/bulk", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesIDAllocationsBulkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ServiceAllocationViewModel]])
                res.service_allocation_view_models = out

        return res

    
    def post_setup_v1_services_id_block(self, request: operations.PostSetupV1ServicesIDBlockRequest) -> operations.PostSetupV1ServicesIDBlockResponse:
        r"""Create a new service block
        Creates a new service block. You must specify a StartDateTime and EndDateTime.
        A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
        
        Service blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
        
        Service blocks can be for a specific date range instance or set to repeat at a specified frequency.
        The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively. 
        
        Daily blocks will repeat for each day of the week for the date range specified.
        
        Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
        you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
        of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
        For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
        
        Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
        the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
        repeat every 10 days. The interval property applies to all repeat frequencies.
        
        Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
        the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
        
        Repeat blocks will end on the date specified by the end date. You can specify 9999-12-31 in 
        the EndDate field to indicate the repeating block should continue indefinitely.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/block", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesIDBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceBlockViewModel])
                res.service_block_view_model = out

        return res

    
    def post_setup_v1_services_id_uploadimage(self, request: operations.PostSetupV1ServicesIDUploadimageRequest) -> operations.PostSetupV1ServicesIDUploadimageResponse:
        r"""Uploads a service image
        Use this endpoint to upload a service image. You must convert the image to a base64 encoded string
        and pass that string as input along with your filename.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/uploadimage", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesIDUploadimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def put_setup_v1_services_allocations_id_(self, request: operations.PutSetupV1ServicesAllocationsIDRequest) -> operations.PutSetupV1ServicesAllocationsIDResponse:
        r"""Update a service allocation
        Updates a service allocation. Refer to the details in the POST service allocation for setting each of the required parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/allocations/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    def put_setup_v1_services_block_id_(self, request: operations.PutSetupV1ServicesBlockIDRequest) -> operations.PutSetupV1ServicesBlockIDResponse:
        r"""Update a service block
        Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/block/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceBlockViewModel])
                res.service_block_view_model = out

        return res

    
    def put_setup_v1_services_bookingwindows_id_(self, request: operations.PutSetupV1ServicesBookingwindowsIDRequest) -> operations.PutSetupV1ServicesBookingwindowsIDResponse:
        r"""Updates a bookingWindow object.
        Use this endpoint to update a booking window
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/bookingwindows/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesBookingwindowsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingWindowViewModel])
                res.booking_window_view_model = out

        return res

    
    def put_setup_v1_services_id_(self, request: operations.PutSetupV1ServicesIDRequest) -> operations.PutSetupV1ServicesIDResponse:
        r"""Updates a service object.
        Use this endpoint to update a service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def put_setup_v1_services_id_availability(self, request: operations.PutSetupV1ServicesIDAvailabilityRequest) -> operations.PutSetupV1ServicesIDAvailabilityResponse:
        r"""Updates Weekly Availability
        Use this endpoint to update service availability. The Id parameter specifies the service
        for which you are updating availability. Availability day entries do not need to be created. 
        The availbility day entries are created when a service object is created. They default to
        the business hours.
        
        Create an entry for each weekday you wish to update. Days are defined as sun,mon,tue,wed,thu,fri,sat.
        Start and End Times are entered in miltary format. e.g 2230 is 10:30pm. 
        
        OnSched API provides support for 24 hour availability. For midnight start of day use 0. For midnight end of day use 2400.
        
        To set a day as unavailable, set both the StartTime and EndTime to 0. If you require times in between specified hours
        to be unavailable, use the resource blocks endpoints. 
        
        Times entered represent the timezone of the business location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/availability", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesIDAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAvailabilityViewModel])
                res.service_availability_view_model = out

        return res

    
    def put_setup_v1_services_id_recover(self, request: operations.PutSetupV1ServicesIDRecoverRequest) -> operations.PutSetupV1ServicesIDRecoverResponse:
        r"""Recovers a service object.
        Use this endpoint to recover a deleted service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/recover", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    