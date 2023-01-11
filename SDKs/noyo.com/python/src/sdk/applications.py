import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Applications:
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

    
    def cancel_group_application(self, request: operations.CancelGroupApplicationRequest) -> operations.CancelGroupApplicationResponse:
        r"""Cancel a Group Application
        Cancels a group application to the carrier based on the ID provided.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/{version}/cancel", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelGroupApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupApplicationResult])
                res.group_application_result = out

        return res

    
    def create_group_application(self, request: operations.CreateGroupApplicationRequest) -> operations.CreateGroupApplicationResponse:
        r"""Create new Group Application
        After creating a group, you can then create one or more new applications (one per carrier). Just pass the carrier ID and carrier group ID (if known) for the carrier associated with the application and the application type. The carrier group ID will allow us to reference the group in the carrier’s system if that has already been allocated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/groups/{group_id}/applications", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupApplicationResult])
                res.group_application_result = out

        return res

    
    def edit_group_application(self, request: operations.EditGroupApplicationRequest) -> operations.EditGroupApplicationResponse:
        r"""Edit a Group Application
        Edit a group application based on the ID provided. The version parameter must match the latest group application version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/{version}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditGroupApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupApplicationResult])
                res.group_application_result = out

        return res

    
    def get_all_applications(self, request: operations.GetAllApplicationsRequest) -> operations.GetAllApplicationsResponse:
        r"""Get All Applications
        Returns a list of all applications
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/applications"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllApplicationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedGroupApplicationResult])
                res.paginated_group_application_result = out

        return res

    
    def get_group_application(self, request: operations.GetGroupApplicationRequest) -> operations.GetGroupApplicationResponse:
        r"""Get Group Application
        Returns the latest version of a single group application based on the ID provided.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupApplicationResult])
                res.group_application_result = out

        return res

    
    def get_group_applications(self, request: operations.GetGroupApplicationsRequest) -> operations.GetGroupApplicationsResponse:
        r"""Get Group Applications
        Returns a list of all applications for the given group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/groups/{group_id}/applications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupApplicationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedGroupApplicationResult])
                res.paginated_group_application_result = out

        return res

    
    def submit_group_application(self, request: operations.SubmitGroupApplicationRequest) -> operations.SubmitGroupApplicationResponse:
        r"""Submit a Group Application
        Submits a group application to the carrier based on the ID provided.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/{version}/submit", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SubmitGroupApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupApplicationResult])
                res.group_application_result = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationValidationResult])
                res.application_validation_result = out

        return res

    
    def validate_group_application(self, request: operations.ValidateGroupApplicationRequest) -> operations.ValidateGroupApplicationResponse:
        r"""Validate Group Application
        Returns a list of errors if the group application is not valid else an empty list is returned
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/validate", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ValidateGroupApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationValidationResult])
                res.application_validation_result = out

        return res

    