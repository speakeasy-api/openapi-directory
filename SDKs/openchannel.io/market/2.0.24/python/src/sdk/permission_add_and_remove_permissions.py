import requests
from sdk.models import operations
from . import utils

class PermissionAddAndRemovePermissions:
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

    
    def delete_permission_apps_app_id_(self, request: operations.DeletePermissionAppsAppIDRequest) -> operations.DeletePermissionAppsAppIDResponse:
        r"""Removes permission that allows the app to access this user's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/permission/apps/{appId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePermissionAppsAppIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_permission_apps_app_id_(self, request: operations.GetPermissionAppsAppIDRequest) -> operations.GetPermissionAppsAppIDResponse:
        r"""Returns permission that allows the app to access this user's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/permission/apps/{appId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPermissionAppsAppIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_permission_apps_app_id_(self, request: operations.PostPermissionAppsAppIDRequest) -> operations.PostPermissionAppsAppIDResponse:
        r"""Adds permission to allow the app to access this user's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/permission/apps/{appId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPermissionAppsAppIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    