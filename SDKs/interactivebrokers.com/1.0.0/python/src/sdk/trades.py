import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Trades:
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

    
    def get_accounts_account_trades(self, request: operations.GetAccountsAccountTradesRequest) -> operations.GetAccountsAccountTradesResponse:
        r"""Returns trades in account
        Returns a list of trades for the account starting at the given 'since' date to the current time (now()). Timezone is UTC. Any request with a future since date or going further than one week will result in an HTTP 400 bad request response. Calling /trades without since will return all trades for the past 24 hours.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/trades", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("GET", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsAccountTradesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetAccountsAccountTrades200ApplicationJSON]])
                res.get_accounts_account_trades_200_application_json_objects = out
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

    