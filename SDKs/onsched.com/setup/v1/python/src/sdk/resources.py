import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Resources:
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

    
    def delete_setup_v1_resources_allocations_id_(self, request: operations.DeleteSetupV1ResourcesAllocationsIDRequest) -> operations.DeleteSetupV1ResourcesAllocationsIDResponse:
        r"""Delete a resource allocation object
        Deletes a resource allocation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/allocations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def delete_setup_v1_resources_block_id_(self, request: operations.DeleteSetupV1ResourcesBlockIDRequest) -> operations.DeleteSetupV1ResourcesBlockIDResponse:
        r"""Delete a resource block object
        Deletes a resource block.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/block/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def delete_setup_v1_resources_id_(self, request: operations.DeleteSetupV1ResourcesIDRequest) -> operations.DeleteSetupV1ResourcesIDResponse:
        r"""Deletes a resource object.
        Use this endpoint to delete a resource. The resource is not permanently deleted and can be recovered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def delete_setup_v1_resources_id_deleteimage(self, request: operations.DeleteSetupV1ResourcesIDDeleteimageRequest) -> operations.DeleteSetupV1ResourcesIDDeleteimageResponse:
        r"""Removes a resource image
        Use this endpoint to delete a previously uploaded resource image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/deleteimage", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesIDDeleteimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def delete_setup_v1_resources_id_services(self, request: operations.DeleteSetupV1ResourcesIDServicesRequest) -> operations.DeleteSetupV1ResourcesIDServicesResponse:
        r"""Deletes resource services from the specified resource
        Use this endpoint to delete all resource services for a resource
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/services", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def get_setup_v1_resources(self, request: operations.GetSetupV1ResourcesRequest) -> operations.GetSetupV1ResourcesResponse:
        r"""Returns a list of resources.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resources"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_resources_allocations_id_(self, request: operations.GetSetupV1ResourcesAllocationsIDRequest) -> operations.GetSetupV1ResourcesAllocationsIDResponse:
        r"""Update a resource allocation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/allocations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceAllocationViewModel])
                res.resource_allocation_view_model = out

        return res

    
    def get_setup_v1_resources_blocks_id_(self, request: operations.GetSetupV1ResourcesBlocksIDRequest) -> operations.GetSetupV1ResourcesBlocksIDResponse:
        r"""Update a resource block
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/blocks/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesBlocksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def get_setup_v1_resources_timezones(self) -> operations.GetSetupV1ResourcesTimezonesResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resources/timezones"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesTimezonesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemTimezoneViewModel])
                res.system_timezone_view_model = out

        return res

    
    def get_setup_v1_resources_id_(self, request: operations.GetSetupV1ResourcesIDRequest) -> operations.GetSetupV1ResourcesIDResponse:
        r"""Returns a resource object.
        The result returned is a single resource object. An id is required to find the resource. Find customer id's using either the GET consumer/v1/resources end point,
        or the GET consumer/v1/appointments end point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def get_setup_v1_resources_id_allocations(self, request: operations.GetSetupV1ResourcesIDAllocationsRequest) -> operations.GetSetupV1ResourcesIDAllocationsResponse:
        r"""Returns a list of resource allocations.
        Resource allocations allow you to specify explicitly the times you are available as opposed to 
        generating resource availability from the times that are not unavailable.
        
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/allocations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDAllocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_allocation_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_resources_id_availability(self, request: operations.GetSetupV1ResourcesIDAvailabilityRequest) -> operations.GetSetupV1ResourcesIDAvailabilityResponse:
        r"""Returns a list of weekly availability
        Use this endpoint to get weekly availability for a resource. The displayed
        available times represent the resource timezone. The resource timezone can
        be set to any world timezone. By default it is set to the Business timezone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/availability", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceAvailabilityViewModel])
                res.resource_availability_view_model = out

        return res

    
    def get_setup_v1_resources_id_blocks(self, request: operations.GetSetupV1ResourcesIDBlocksRequest) -> operations.GetSetupV1ResourcesIDBlocksResponse:
        r"""Returns a list of resource blocks.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/blocks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDBlocksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_block_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_resources_id_calendar_auth_google_google_email_address_(self, request: operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressRequest) -> operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressResponse:
        r"""Returns a resource object.
        The result returned contains the google calendar authorization url
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/calendar/auth/google/{googleEmailAddress}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarAuthViewModel])
                res.calendar_auth_view_model = out

        return res

    
    def get_setup_v1_resources_id_calendar_auth_outlook_outlook_email_address_(self, request: operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressRequest) -> operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressResponse:
        r"""Returns a resource object.
        The result returned contains the outlook calendar authorization url
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/calendar/auth/outlook/{outlookEmailAddress}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarAuthViewModel])
                res.calendar_auth_view_model = out

        return res

    
    def post_setup_v1_resources(self, request: operations.PostSetupV1ResourcesRequest) -> operations.PostSetupV1ResourcesResponse:
        r"""Creates a new resource object.
        Use this endpoint to create a new resource. If not specified, the business location id defaults to the first location in the company.<br /><br /> 
        Email Address and a Name are required for creating a new resource. <br /><br />
        Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource, 
        while passing in an empty array will result in all services being selected. This includes company and business scoped services. <br /><br />
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resources"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def post_setup_v1_resources_bulk(self, request: operations.PostSetupV1ResourcesBulkRequest) -> operations.PostSetupV1ResourcesBulkResponse:
        r"""Creates new resource objects.
        Use this endpoint to create new resources. If not specified the business location id defaults to the first location in the company.<br /><br />
        Email Address and a Name are required for creating each new resource.<br /><br />
        Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resources,
        while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resources/bulk"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesBulkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ResourceViewModel]])
                res.resource_view_models = out

        return res

    
    def post_setup_v1_resources_id_allocations(self, request: operations.PostSetupV1ResourcesIDAllocationsRequest) -> operations.PostSetupV1ResourcesIDAllocationsResponse:
        r"""Create a new resource allocation
        Creates a new resource allocation. You must specify a StartDateTime and EndDateTime.
        A reason for the block is optional. This reason will display in the OnSched Portal Calendar.
        
        Resource allocations can be set to specific time ranges or for the whole day. 
        
        Resource allocations can repeat for a specific date range instance or set to repeat at a specified frequency.
        The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively. 
        
        Daily allocations will repeat for each day of the week for the date range specified.
        
        Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
        you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
        of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
        For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
        
        Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly allocation means that
        the allocation will repeat every second week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will
        repeat every 10 days. The interval property applies to all repeat frequencies.
        
        Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
        the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
        
        Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in 
        the EndDate field to indicate the repeating block should continue indefinitely.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/allocations", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesIDAllocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def post_setup_v1_resources_id_block(self, request: operations.PostSetupV1ResourcesIDBlockRequest) -> operations.PostSetupV1ResourcesIDBlockResponse:
        r"""Create a new resource block
        Creates a new resource block. You must specify a StartDateTime and EndDateTime.
        A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
        
        Resource blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
        
        Resource blocks can be for a specific date range instance or set to repeat at a specified frequency.
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
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/block", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesIDBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def post_setup_v1_resources_id_services(self, request: operations.PostSetupV1ResourcesIDServicesRequest) -> operations.PostSetupV1ResourcesIDServicesResponse:
        r"""Adds resource services to the specified resource
        Use this endpoint to add resource services
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/services", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def post_setup_v1_resources_id_uploadimage(self, request: operations.PostSetupV1ResourcesIDUploadimageRequest) -> operations.PostSetupV1ResourcesIDUploadimageResponse:
        r"""Uploads a resource image
        Use this endpoint to upload a resource image. You must convert the image to a base64 encoded string
        and pass that string as input along with your filename.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/uploadimage", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesIDUploadimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def put_setup_v1_resources_allocations_id_(self, request: operations.PutSetupV1ResourcesAllocationsIDRequest) -> operations.PutSetupV1ResourcesAllocationsIDResponse:
        r"""Update a resource allocation
        Updates a resource allocation. Refer to the details in the POST resource allocation for setting each of the required parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/allocations/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def put_setup_v1_resources_block_id_(self, request: operations.PutSetupV1ResourcesBlockIDRequest) -> operations.PutSetupV1ResourcesBlockIDResponse:
        r"""Update a resource block
        Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/block/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def put_setup_v1_resources_bulk(self, request: operations.PutSetupV1ResourcesBulkRequest) -> operations.PutSetupV1ResourcesBulkResponse:
        r"""Updates resource objects.
        Use this endpoint to update multiple resources.<br /><br /> 
        Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the each resource, 
        while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resources/bulk"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesBulkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ResourceViewModel]])
                res.resource_view_models = out

        return res

    
    def put_setup_v1_resources_id_(self, request: operations.PutSetupV1ResourcesIDRequest) -> operations.PutSetupV1ResourcesIDResponse:
        r"""Updates a resource object.
        Use this endpoint to update a resource. <br /><br />
        Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource,
        while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def put_setup_v1_resources_id_availability(self, request: operations.PutSetupV1ResourcesIDAvailabilityRequest) -> operations.PutSetupV1ResourcesIDAvailabilityResponse:
        r"""Updates Weekly Availability
        Use this endpoint to update resource availability. The Id parameter specifies the resource
        for which you are updating availability. Availability day entries do not need to be created. 
        The availbility day entries are created when a resource object is created. They default to
        the business hours.
        
        Create an entry for each weekday you wish to update. Days are defined as sun,mon,tue,wed,thu,fri,sat.
        Start and End Times are entered in miltary format. e.g 2230 is 10:30pm. 
        
        OnSched API provides support for 24 hour availability. For midnight start of day use 0. For midnight end of day use 2400.
        
        To set a day as unavailable, set both the StartTime and EndTime to 0. If you require times in between specified hours
        to be unavailable, use the resource blocks endpoints. 
        
        Times entered represent the
        timezone of the resource. Resources can belong to any world timezone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/availability", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesIDAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceAvailabilityViewModel])
                res.resource_availability_view_model = out

        return res

    
    def put_setup_v1_resources_id_reassign_appointments_resource_id_(self, request: operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDRequest) -> operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDResponse:
        r"""Reassigns appointments to another resource
        Use this endpoint to reassign appointments from one resource to another.
        If the startDate is not supplied, the default is today's date + 1 day;
        If the endDate is not supplied, all future appointments from the start date will be reassigned
        If the calendarId is not supplied the default is the primary calendar of the location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/reassign/appointments/{resourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AppointmentViewModel]])
                res.appointment_view_models = out

        return res

    
    def put_setup_v1_resources_id_recover(self, request: operations.PutSetupV1ResourcesIDRecoverRequest) -> operations.PutSetupV1ResourcesIDRecoverResponse:
        r"""Recovers a resource object.
        Use this endpoint to recover a deleted resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/recover", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    