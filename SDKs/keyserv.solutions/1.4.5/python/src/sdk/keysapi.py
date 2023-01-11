import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class KeysAPI:
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

    
    def keys_api_current(self, request: operations.KeysAPICurrentRequest) -> operations.KeysAPICurrentResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/KeysApi/Current/{serial}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.KeysAPICurrentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.keys_api_current_200_application_json_one_of = out

        return res

    
    def keys_api_custom(self, request: operations.KeysAPICustomRequest) -> operations.KeysAPICustomResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/KeysApi/Custom/{serial}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.KeysAPICustomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.keys_api_custom_200_application_octet_stream_binary_string = r.content

        return res

    
    def keys_api_expiry(self, request: operations.KeysAPIExpiryRequest) -> operations.KeysAPIExpiryResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/KeysApi/Expiry/{serial}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.KeysAPIExpiryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.keys_api_expiry_200_application_json_one_of = out

        return res

    
    def keys_api_find(self, request: operations.KeysAPIFindRequest) -> operations.KeysAPIFindResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/KeysApi/Find/{serial}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.KeysAPIFindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.keys_api_find_200_application_json_one_of = out

        return res

    