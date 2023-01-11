import requests
from sdk.models import operations
from . import utils

class UsersFindAndModifyUsers:
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

    
    def delete_users_user_id_(self, request: operations.DeleteUsersUserIDRequest) -> operations.DeleteUsersUserIDResponse:
        r"""Removes a single user
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUsersUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            pass

        return res

    
    def get_users(self, request: operations.GetUsersRequest) -> operations.GetUsersResponse:
        r"""Returns a paginated list of users
        - Results are paginated and the default is value is 100 if no limit is provided
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_users_user_id_(self, request: operations.GetUsersUserIDRequest) -> operations.GetUsersUserIDResponse:
        r"""Return a single user
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_users_user_id_(self, request: operations.PatchUsersUserIDRequest) -> operations.PatchUsersUserIDResponse:
        r"""Updates user fields
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchUsersUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_users_user_id_(self, request: operations.PostUsersUserIDRequest) -> operations.PostUsersUserIDResponse:
        r"""Updates a single user or adds the user if they don't exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    