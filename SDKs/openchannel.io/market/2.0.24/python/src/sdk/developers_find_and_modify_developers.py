import requests
from sdk.models import operations
from . import utils

class DevelopersFindAndModifyDevelopers:
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

    
    def delete_developers_developer_id_(self, request: operations.DeleteDevelopersDeveloperIDRequest) -> operations.DeleteDevelopersDeveloperIDResponse:
        r"""Removes a single developer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developers/{developerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDevelopersDeveloperIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            pass

        return res

    
    def get_developers(self, request: operations.GetDevelopersRequest) -> operations.GetDevelopersResponse:
        r"""Returns a paginated list of developers
        - Results are paginated and the default is value is 100 if no limit is provided
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/developers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDevelopersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_developers_developer_id_(self, request: operations.GetDevelopersDeveloperIDRequest) -> operations.GetDevelopersDeveloperIDResponse:
        r"""Returns a single developer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developers/{developerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDevelopersDeveloperIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_developers_developer_id_(self, request: operations.PatchDevelopersDeveloperIDRequest) -> operations.PatchDevelopersDeveloperIDResponse:
        r"""Updates the developer fields
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developers/{developerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchDevelopersDeveloperIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_developers_developer_id_(self, request: operations.PostDevelopersDeveloperIDRequest) -> operations.PostDevelopersDeveloperIDResponse:
        r"""Updates the developer record or adds the developer if it doesn't exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developers/{developerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDevelopersDeveloperIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    