import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Aspsps:
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

    
    def retrieve_all_supported_aspsp_s_in_a_given_country(self, request: operations.RetrieveAllSupportedAspspSInAGivenCountryRequest) -> operations.RetrieveAllSupportedAspspSInAGivenCountryResponse:
        r"""List all ASPSPs available.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/aspsps/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveAllSupportedAspspSInAGivenCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Aspsp]])
                res.aspsps = out

        return res

    
    def retrieve_details_about_specific_aspsp(self, request: operations.RetrieveDetailsAboutSpecificAspspRequest) -> operations.RetrieveDetailsAboutSpecificAspspResponse:
        r"""Get details about a specific ASPSP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/aspsps/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveDetailsAboutSpecificAspspResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aspsp])
                res.aspsp = out

        return res

    