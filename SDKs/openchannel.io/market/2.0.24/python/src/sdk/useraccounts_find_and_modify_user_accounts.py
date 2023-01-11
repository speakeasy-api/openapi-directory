import requests
from sdk.models import operations
from . import utils

class UserAccountsFindAndModifyUserAccounts:
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

    
    def delete_user_accounts_user_account_id_(self, request: operations.DeleteUserAccountsUserAccountIDRequest) -> operations.DeleteUserAccountsUserAccountIDResponse:
        r"""Removes the user account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userAccounts/{userAccountId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserAccountsUserAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            pass

        return res

    
    def get_user_accounts(self, request: operations.GetUserAccountsRequest) -> operations.GetUserAccountsResponse:
        r"""Returns a paginated list of userAccounts
        - Results are paginated and the default is value is 1000 if no limit is provided
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/userAccounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_user_accounts_user_account_id_(self, request: operations.GetUserAccountsUserAccountIDRequest) -> operations.GetUserAccountsUserAccountIDResponse:
        r"""Returns a single user account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userAccounts/{userAccountId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserAccountsUserAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_user_accounts_user_account_id_(self, request: operations.PatchUserAccountsUserAccountIDRequest) -> operations.PatchUserAccountsUserAccountIDResponse:
        r"""Updates the user account fields
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userAccounts/{userAccountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchUserAccountsUserAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_user_accounts_user_account_id_(self, request: operations.PostUserAccountsUserAccountIDRequest) -> operations.PostUserAccountsUserAccountIDResponse:
        r"""Updates the user account or adds the user account if it doesn't exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userAccounts/{userAccountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUserAccountsUserAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    