import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Balances:
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

    
    def get_accounts_account_id_balances(self, request: operations.GetAccountsAccountIDBalancesRequest) -> operations.GetAccountsAccountIDBalancesResponse:
        r"""Get Balances
        Get Balances by Account ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/balances", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsAccountIDBalancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObReadBalance1])
                res.ob_read_balance1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObReadBalance1])
                res.ob_read_balance1 = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    