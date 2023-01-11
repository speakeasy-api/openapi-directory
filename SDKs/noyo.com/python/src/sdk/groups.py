import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Groups:
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

    
    def create_group(self, request: operations.CreateGroupRequest) -> operations.CreateGroupResponse:
        r"""Create new Group
        In this step you’ll pass basic information about the group, such as their name, SIC code, and EIN. You can then move on to further configure the group, associate this group with one or more applications, and add employees and dependents to that group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/groups"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupResult])
                res.group_result = out

        return res

    
    def edit_group(self, request: operations.EditGroupRequest) -> operations.EditGroupResponse:
        r"""Edit a Group
        Edit a group based on the ID provided. The version parameter must match the latest group version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/groups/{group_id}/{version}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupResult])
                res.group_result = out

        return res

    
    def get_group(self, request: operations.GetGroupRequest) -> operations.GetGroupResponse:
        r"""Get Group
        Returns the latest version of a single group based on the ID provided.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/groups/{group_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupResult])
                res.group_result = out

        return res

    
    def get_groups(self, request: operations.GetGroupsRequest) -> operations.GetGroupsResponse:
        r"""Get Groups
        Returns a list of all groups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/groups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedGroupResult])
                res.paginated_group_result = out

        return res

    