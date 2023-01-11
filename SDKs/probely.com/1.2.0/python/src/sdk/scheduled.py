import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Scheduled:
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

    
    def delete_targets_target_id_scheduledscans_id_(self, request: operations.DeleteTargetsTargetIDScheduledscansIDRequest) -> operations.DeleteTargetsTargetIDScheduledscansIDResponse:
        r"""Delete
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scheduledscans/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTargetsTargetIDScheduledscansIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTargetsTargetIDScheduledscansID401ApplicationJSON])
                res.delete_targets_target_id_scheduledscans_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTargetsTargetIDScheduledscansID403ApplicationJSON])
                res.delete_targets_target_id_scheduledscans_id_403_application_json_object = out

        return res

    
    def get_targets_all_scheduledscans_expanded_(self, request: operations.GetTargetsAllScheduledscansExpandedRequest) -> operations.GetTargetsAllScheduledscansExpandedResponse:
        r"""List scheduled scans for all targets expanding recurrence
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/targets/all/scheduledscans/expanded/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsAllScheduledscansExpandedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsAllScheduledscansExpanded200ApplicationJSON])
                res.get_targets_all_scheduledscans_expanded_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsAllScheduledscansExpanded404ApplicationJSON])
                res.get_targets_all_scheduledscans_expanded_404_application_json_object = out

        return res

    
    def get_targets_target_id_scheduledscans_(self, request: operations.GetTargetsTargetIDScheduledscansRequest) -> operations.GetTargetsTargetIDScheduledscansResponse:
        r"""List scheduled scans
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scheduledscans/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDScheduledscansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScheduledscans200ApplicationJSON])
                res.get_targets_target_id_scheduledscans_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScheduledscans401ApplicationJSON])
                res.get_targets_target_id_scheduledscans_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScheduledscans404ApplicationJSON])
                res.get_targets_target_id_scheduledscans_404_application_json_object = out

        return res

    
    def get_targets_target_id_scheduledscans_expanded_(self, request: operations.GetTargetsTargetIDScheduledscansExpandedRequest) -> operations.GetTargetsTargetIDScheduledscansExpandedResponse:
        r"""List scheduled scans expanding recurrence
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scheduledscans/expanded/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDScheduledscansExpandedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScheduledscansExpanded200ApplicationJSON])
                res.get_targets_target_id_scheduledscans_expanded_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScheduledscansExpanded404ApplicationJSON])
                res.get_targets_target_id_scheduledscans_expanded_404_application_json_object = out

        return res

    
    def get_targets_target_id_scheduledscans_id_(self, request: operations.GetTargetsTargetIDScheduledscansIDRequest) -> operations.GetTargetsTargetIDScheduledscansIDResponse:
        r"""Retrieve a scheduled scan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scheduledscans/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDScheduledscansIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Scheduled])
                res.scheduled = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScheduledscansID401ApplicationJSON])
                res.get_targets_target_id_scheduledscans_id_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScheduledscansID404ApplicationJSON])
                res.get_targets_target_id_scheduledscans_id_404_application_json_object = out

        return res

    
    def patch_targets_target_id_scheduledscans_id_(self, request: operations.PatchTargetsTargetIDScheduledscansIDRequest) -> operations.PatchTargetsTargetIDScheduledscansIDResponse:
        r"""Partial update
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scheduledscans/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchTargetsTargetIDScheduledscansIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Scheduled])
                res.scheduled = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDScheduledscansID400ApplicationJSON])
                res.patch_targets_target_id_scheduledscans_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDScheduledscansID401ApplicationJSON])
                res.patch_targets_target_id_scheduledscans_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDScheduledscansID403ApplicationJSON])
                res.patch_targets_target_id_scheduledscans_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDScheduledscansID404ApplicationJSON])
                res.patch_targets_target_id_scheduledscans_id_404_application_json_object = out

        return res

    
    def post_targets_target_id_scheduledscans_(self, request: operations.PostTargetsTargetIDScheduledscansRequest) -> operations.PostTargetsTargetIDScheduledscansResponse:
        r"""Create new scheduled scan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scheduledscans/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTargetsTargetIDScheduledscansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Scheduled])
                res.scheduled = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDScheduledscans400ApplicationJSON])
                res.post_targets_target_id_scheduledscans_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDScheduledscans401ApplicationJSON])
                res.post_targets_target_id_scheduledscans_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDScheduledscans403ApplicationJSON])
                res.post_targets_target_id_scheduledscans_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDScheduledscans404ApplicationJSON])
                res.post_targets_target_id_scheduledscans_404_application_json_object = out

        return res

    
    def put_targets_target_id_scheduledscans_id_(self, request: operations.PutTargetsTargetIDScheduledscansIDRequest) -> operations.PutTargetsTargetIDScheduledscansIDResponse:
        r"""Update a scheduled scan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scheduledscans/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTargetsTargetIDScheduledscansIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Scheduled])
                res.scheduled = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDScheduledscansID400ApplicationJSON])
                res.put_targets_target_id_scheduledscans_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDScheduledscansID401ApplicationJSON])
                res.put_targets_target_id_scheduledscans_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDScheduledscansID403ApplicationJSON])
                res.put_targets_target_id_scheduledscans_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDScheduledscansID404ApplicationJSON])
                res.put_targets_target_id_scheduledscans_id_404_application_json_object = out

        return res

    