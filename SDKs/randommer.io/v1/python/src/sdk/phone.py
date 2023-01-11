import requests
from sdk.models import operations
from . import utils

class Phone:
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

    
    def get_api_phone_countries(self, request: operations.GetAPIPhoneCountriesRequest) -> operations.GetAPIPhoneCountriesResponse:
        r"""Get available countries
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Phone/Countries"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPhoneCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_phone_generate(self, request: operations.GetAPIPhoneGenerateRequest) -> operations.GetAPIPhoneGenerateResponse:
        r"""Get bulk telephone numbers for a country
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Phone/Generate"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPhoneGenerateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_phone_validate(self, request: operations.GetAPIPhoneValidateRequest) -> operations.GetAPIPhoneValidateResponse:
        r"""Validate a phone number
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Phone/Validate"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPhoneValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    