import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Corporate:
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

    
    def get_available_corporate_permissions(self) -> operations.GetAvailableCorporatePermissionsResponse:
        r"""Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
        Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/corporate/permissions"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAvailableCorporatePermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionList])
                res.permission_list = out

        return res

    
    def get_available_corporate_permissions_by_id(self, request: operations.GetAvailableCorporatePermissionsByIDRequest) -> operations.GetAvailableCorporatePermissionsByIDResponse:
        r"""Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
        Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/corporates/{corporateId}/permissions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAvailableCorporatePermissionsByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionList])
                res.permission_list = out

        return res

    
    def get_corporate(self) -> operations.GetCorporateResponse:
        r"""Get details of my corporate account
        Get details of my corporate account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/corporate"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCorporateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CorporateAccount])
                res.corporate_account = out

        return res

    
    def get_corporate_by_id(self, request: operations.GetCorporateByIDRequest) -> operations.GetCorporateByIDResponse:
        r"""Get details of this corporate account
        Get details of this corporate account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/corporates/{corporateId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCorporateByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CorporateAccount])
                res.corporate_account = out

        return res

    
    def get_corporate_user_groups(self) -> operations.GetCorporateUserGroupsResponse:
        r"""Get a list of user groups for my corporate account
        Get a list of user groups for my corporate account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/corporate/user-groups"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCorporateUserGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserGroupList])
                res.user_group_list = out

        return res

    
    def get_corporate_user_groups_by_id(self, request: operations.GetCorporateUserGroupsByIDRequest) -> operations.GetCorporateUserGroupsByIDResponse:
        r"""Get a list of user groups for this corporate account
        Get a list of user groups for this corporate account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/corporates/{corporateId}/user-groups", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCorporateUserGroupsByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserGroupList])
                res.user_group_list = out

        return res

    
    def get_corporate_users(self) -> operations.GetCorporateUsersResponse:
        r"""Get a list of users for my corporate account
        Get a list of users for my corporate account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/corporate/users"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCorporateUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserList])
                res.user_list = out

        return res

    
    def get_corporate_users_by_id(self, request: operations.GetCorporateUsersByIDRequest) -> operations.GetCorporateUsersByIDResponse:
        r"""Get a list of users for this corporate account
        Get a list of users for this corporate account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/corporates/{corporateId}/users", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCorporateUsersByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserList])
                res.user_list = out

        return res

    
    def save_corporate_user(self, request: operations.SaveCorporateUserRequest) -> operations.SaveCorporateUserResponse:
        r"""Create or update a corporate user
        Create or update a corporate user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/corporate/users"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SaveCorporateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def save_corporate_user_group(self, request: operations.SaveCorporateUserGroupRequest) -> operations.SaveCorporateUserGroupResponse:
        r"""Create or update a corporate user group
        Create or update a corporate user group
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/corporate/user-groups"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SaveCorporateUserGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserGroup])
                res.user_group = out

        return res

    
    def save_corporate_user_group_by_id(self, request: operations.SaveCorporateUserGroupByIDRequest) -> operations.SaveCorporateUserGroupByIDResponse:
        r"""Create or update a corporate user group for this corporate account
        Create or update a corporate user group for this corporate account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/corporates/{corporateId}/user-groups", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SaveCorporateUserGroupByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserGroup])
                res.user_group = out

        return res

    