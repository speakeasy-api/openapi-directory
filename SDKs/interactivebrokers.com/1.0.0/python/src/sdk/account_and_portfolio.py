import requests
from typing import Optional
from sdk.models import operations
from . import utils

class AccountAndPortfolio:
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

    
    def get_accounts(self, request: operations.GetAccountsRequest) -> operations.GetAccountsResponse:
        r"""Brokerage Accounts
        Allows the caller to request a list of accounts associated with the session.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAccounts200ApplicationJSON])
                res.get_accounts_200_application_json_object = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def get_accounts_account_positions(self, request: operations.GetAccountsAccountPositionsRequest) -> operations.GetAccountsAccountPositionsResponse:
        r"""Account Positions
        Returns a list of positions for the indicated account. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/positions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsAccountPositionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetAccountsAccountPositions200ApplicationJSON]])
                res.get_accounts_account_positions_200_application_json_objects = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def get_accounts_account_summary(self, request: operations.GetAccountsAccountSummaryRequest) -> operations.GetAccountsAccountSummaryResponse:
        r"""Account Values Summary
        Returns a list of account and margin balances associated with the account passed in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/summary", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsAccountSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAccountsAccountSummary200ApplicationJSON])
                res.get_accounts_account_summary_200_application_json_object = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    