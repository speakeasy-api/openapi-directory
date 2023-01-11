import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Appointments:
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

    
    def get_setup_v1_appointments(self, request: operations.GetSetupV1AppointmentsRequest) -> operations.GetSetupV1AppointmentsResponse:
        r"""Returns a list of appointments.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/appointments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1AppointmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.appointment_list_view_model = out

        return res

    
    def get_setup_v1_appointments_id_(self, request: operations.GetSetupV1AppointmentsIDRequest) -> operations.GetSetupV1AppointmentsIDResponse:
        r"""Returns an appointment object.
        The result returned is a single appointment object. A valid id is required to find the appointment. 
        
        Find appointment id's using the GET consumer/v1/appointments end point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/appointments/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1AppointmentsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    def put_setup_v1_appointments_id_reassign_resource_resource_id_(self, request: operations.PutSetupV1AppointmentsIDReassignResourceResourceIDRequest) -> operations.PutSetupV1AppointmentsIDReassignResourceResourceIDResponse:
        r"""Reassigns the appointment to the supplied resourceId
        The result returned is a single appointment object. A valid id is required to find the appointment. 
        
        Find appointment id's using the GET consumer/v1/appointments end point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/appointments/{id}/reassign/resource/{resourceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1AppointmentsIDReassignResourceResourceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    