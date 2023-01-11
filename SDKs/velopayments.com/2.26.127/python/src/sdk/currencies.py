import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Currencies:
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

    
    def list_supported_currencies_v2(self) -> operations.ListSupportedCurrenciesV2Response:
        r"""List Supported Currencies
        List the supported currencies.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/currencies"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSupportedCurrenciesV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupportedCurrencyResponseV2])
                res.supported_currency_response_v2 = out

        return res

    