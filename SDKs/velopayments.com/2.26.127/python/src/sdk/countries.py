import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Countries:
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

    
    def list_payment_channel_rules_v1(self) -> operations.ListPaymentChannelRulesV1Response:
        r"""List Payment Channel Country Rules
        List the country specific payment channel rules.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/paymentChannelRules"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPaymentChannelRulesV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentChannelRulesResponse])
                res.payment_channel_rules_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.inline_response_401 = out

        return res

    
    def list_supported_countries_v1(self) -> operations.ListSupportedCountriesV1Response:
        r"""List Supported Countries
        <p>List the supported countries.</p>
        <p>This version will be retired in March 2020. Use /v2/supportedCountries</p>
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/supportedCountries"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSupportedCountriesV1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupportedCountriesResponse])
                res.supported_countries_response = out

        return res

    
    def list_supported_countries_v2(self) -> operations.ListSupportedCountriesV2Response:
        r"""List Supported Countries
        List the supported countries.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/supportedCountries"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSupportedCountriesV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupportedCountriesResponseV2])
                res.supported_countries_response_v2 = out

        return res

    