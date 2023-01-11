import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ViberServiceMessage:
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

    
    def get_vsm_account(self, request: operations.GetVsmAccountRequest) -> operations.GetVsmAccountResponse:
        r"""Retrieve a Viber Service Message account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/viber_service_msg/{external_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVsmAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VsmAccountResponse])
                res.vsm_account_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out
        elif r.status_code == 404:
            pass

        return res

    