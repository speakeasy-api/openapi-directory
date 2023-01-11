import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Calendars:
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

    
    def delete_setup_v1_calendars_block_id_(self, request: operations.DeleteSetupV1CalendarsBlockIDRequest) -> operations.DeleteSetupV1CalendarsBlockIDResponse:
        r"""Delete a calendar block object
        Deletes a calendar block.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/block/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CalendarsBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarBlockViewModel])
                res.calendar_block_view_model = out

        return res

    
    def delete_setup_v1_calendars_id_(self, request: operations.DeleteSetupV1CalendarsIDRequest) -> operations.DeleteSetupV1CalendarsIDResponse:
        r"""Deletes a calendar object.
        Use this endpoint to delete a calendar. The calendar is not permanently deleted and can be recovered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CalendarsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    def get_setup_v1_calendars(self, request: operations.GetSetupV1CalendarsRequest) -> operations.GetSetupV1CalendarsResponse:
        r"""Returns a list of calendars.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/calendars"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.schedule_list_view_model = out

        return res

    
    def get_setup_v1_calendars_blocks_id_(self, request: operations.GetSetupV1CalendarsBlocksIDRequest) -> operations.GetSetupV1CalendarsBlocksIDResponse:
        r"""Update a calendar block
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/blocks/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsBlocksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarBlockViewModel])
                res.calendar_block_view_model = out

        return res

    
    def get_setup_v1_calendars_id_(self, request: operations.GetSetupV1CalendarsIDRequest) -> operations.GetSetupV1CalendarsIDResponse:
        r"""Returns a calendar object.
        The result returned is a single calendar object. An id is required to find the calendar.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    def get_setup_v1_calendars_id_blocks(self, request: operations.GetSetupV1CalendarsIDBlocksRequest) -> operations.GetSetupV1CalendarsIDBlocksResponse:
        r"""Returns a list of calendar blocks.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}/blocks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsIDBlocksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.calendar_block_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_calendars_id_services(self, request: operations.GetSetupV1CalendarsIDServicesRequest) -> operations.GetSetupV1CalendarsIDServicesResponse:
        r"""Returns a list of services linked to a calendar.
        The result returned is a list of services. An id is required to find the service. Find calendar id's using either the GET setup/v1/calendars end point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_list_view_model = out

        return res

    
    def post_setup_v1_calendars(self, request: operations.PostSetupV1CalendarsRequest) -> operations.PostSetupV1CalendarsResponse:
        r"""Creates a new calendar object.
        Use this endpoint to create an additional calendar. If not specified, the business location id defaults to the primary location of the company.<br /><br />
        Note: Every location has a primary calendar. All appointments will be booked to that calendar unless otherwise specified with a linked service.<br /><br />
        name is a required parameter<br /><br />
        type is a required parameter with a value of “resource”<br /><br />
        interval is a required parameter with a value of 1,5,10,15,20,30,60<br /><br />
        bookingsPerSlot is a required parameter with a value between 1 and 20<br /><br />
        scheduleGroupId is an optional parameter.If supplied, it must be a valid Resource Group Id<br /><br />
        weekly availability is optional.If this element is not populated, then weekly availability defaults to the business hours<br /><br />
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/calendars"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CalendarsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    def post_setup_v1_calendars_id_block(self, request: operations.PostSetupV1CalendarsIDBlockRequest) -> operations.PostSetupV1CalendarsIDBlockResponse:
        r"""Create a new calendar block
        Creates a new calendar block. You must specify a StartDateTime and EndDateTime.
        A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
        
        Calendar blocks can be set to specific time ranges or for the whole day. 
        
        Calendar blocks can be for a specific date range instance or set to repeat at a specified frequency.
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
        
        Repeat blocks will end on the date specified by the end date. You can specify never in the EndDateTime field to indicate the repeating block
        should continue indefinitely.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}/block", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CalendarsIDBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def put_setup_v1_calendars_block_id_(self, request: operations.PutSetupV1CalendarsBlockIDRequest) -> operations.PutSetupV1CalendarsBlockIDResponse:
        r"""Update a calendar block
        Updates a calendar block. Refer to the details in the POST calendar block for setting each of the required parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/block/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CalendarsBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarBlockViewModel])
                res.calendar_block_view_model = out

        return res

    
    def put_setup_v1_calendars_id_(self, request: operations.PutSetupV1CalendarsIDRequest) -> operations.PutSetupV1CalendarsIDResponse:
        r"""Updates a calendar object.
        Use this endpoint to update a calendar. 
        Calendar availability is optional. If this element is not populated then weekly availability is not updated
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CalendarsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    def put_setup_v1_calendars_id_recover(self, request: operations.PutSetupV1CalendarsIDRecoverRequest) -> operations.PutSetupV1CalendarsIDRecoverResponse:
        r"""Recovers a calendar object.
        Use this endpoint to recover a deleted calendar.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}/recover", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CalendarsIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    