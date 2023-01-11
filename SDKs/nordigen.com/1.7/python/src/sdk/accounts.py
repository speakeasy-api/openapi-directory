import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Accounts:
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

    
    def retrieve_account_balances(self, request: operations.RetrieveAccountBalancesRequest) -> operations.RetrieveAccountBalancesResponse:
        r"""Access account balances.
        
        Balances will be returned in Berlin Group PSD2 format.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/accounts/{id}/balances/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveAccountBalancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def retrieve_account_details(self, request: operations.RetrieveAccountDetailsRequest) -> operations.RetrieveAccountDetailsResponse:
        r"""Access account details.
        
        Account details will be returned in Berlin Group PSD2 format.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/accounts/{id}/details/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveAccountDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def retrieve_account_metadata(self, request: operations.RetrieveAccountMetadataRequest) -> operations.RetrieveAccountMetadataResponse:
        r"""Access account metadata.
        
        Information about the account record, such as the processing status and IBAN.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/accounts/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveAccountMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    
    def retrieve_account_transactions(self, request: operations.RetrieveAccountTransactionsRequest) -> operations.RetrieveAccountTransactionsResponse:
        r"""Access account transactions.
        
        Transactions will be returned in Berlin Group PSD2 format.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/accounts/{id}/transactions/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveAccountTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 409:
            pass

        return res

    