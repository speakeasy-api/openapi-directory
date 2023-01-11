import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class GroupCoverages:
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

    
    def create_group_coverage(self, request: operations.CreateGroupCoverageRequest) -> operations.CreateGroupCoverageResponse:
        r"""Create new Group Coverage
        Here you’ll be able to add the lines of coverage for your group, including type of coverage and the requested effective date.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/group_coverages", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupCoverageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupCoverageResult])
                res.group_coverage_result = out

        return res

    
    def edit_group_coverage(self, request: operations.EditGroupCoverageRequest) -> operations.EditGroupCoverageResponse:
        r"""Edit a Group Coverage
        Edit a group coverage based on the ID provided. The version parameter must match the latest group coverage version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/group_coverages/{group_coverage_id}/{version}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditGroupCoverageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupCoverageResult])
                res.group_coverage_result = out

        return res

    
    def get_application_group_coverages(self, request: operations.GetApplicationGroupCoveragesRequest) -> operations.GetApplicationGroupCoveragesResponse:
        r"""Get all Application Group Coverages
        Returns a list of all group coverages for a given application
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/applications/{application_id}/group_coverages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetApplicationGroupCoveragesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedGroupCoverageResult])
                res.paginated_group_coverage_result = out

        return res

    
    def get_group_coverage(self, request: operations.GetGroupCoverageRequest) -> operations.GetGroupCoverageResponse:
        r"""Get Group Coverage
        Returns the latest version of a single group coverage based on the ID provided.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/group_coverages/{group_coverage_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupCoverageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupCoverageResult])
                res.group_coverage_result = out

        return res

    