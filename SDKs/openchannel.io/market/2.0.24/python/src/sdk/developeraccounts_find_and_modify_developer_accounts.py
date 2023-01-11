import requests
from sdk.models import operations
from . import utils

class DeveloperAccountsFindAndModifyDeveloperAccounts:
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

    
    def delete_developer_accounts_developer_account_id_(self, request: operations.DeleteDeveloperAccountsDeveloperAccountIDRequest) -> operations.DeleteDeveloperAccountsDeveloperAccountIDResponse:
        r"""Removes the developer account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developerAccounts/{developerAccountId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeveloperAccountsDeveloperAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            pass

        return res

    
    def get_developer_accounts(self, request: operations.GetDeveloperAccountsRequest) -> operations.GetDeveloperAccountsResponse:
        r"""Returns a paginated list of developerAccounts
        - Results are paginated and the default is value is 1000 if no limit is provided
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/developerAccounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeveloperAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_developer_accounts_developer_account_id_(self, request: operations.GetDeveloperAccountsDeveloperAccountIDRequest) -> operations.GetDeveloperAccountsDeveloperAccountIDResponse:
        r"""Returns a single developer account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developerAccounts/{developerAccountId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeveloperAccountsDeveloperAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_developer_accounts_developer_account_id_(self, request: operations.PatchDeveloperAccountsDeveloperAccountIDRequest) -> operations.PatchDeveloperAccountsDeveloperAccountIDResponse:
        r"""Updates the developer account fields
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developerAccounts/{developerAccountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchDeveloperAccountsDeveloperAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_developer_accounts_developer_account_id_(self, request: operations.PostDeveloperAccountsDeveloperAccountIDRequest) -> operations.PostDeveloperAccountsDeveloperAccountIDResponse:
        r"""Updates the developer account or adds the developer account if it doesn't exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developerAccounts/{developerAccountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeveloperAccountsDeveloperAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    