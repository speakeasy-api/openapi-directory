import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Static:
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

    
    def get_endpoints(self) -> operations.GetEndpointsResponse:
        r"""Available endpoints
        The root endpoint will provide you a JSON Swagger definition.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEndpointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_endpoints_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_formats(self) -> operations.GetFormatsResponse:
        r"""Get a list of supported formats
        Get a list of supported formats for documents, style guides and extensions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/formats"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFormatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_formats_200_application_json_object = out

        return res

    
    def get_languages(self) -> operations.GetLanguagesResponse:
        r"""Get a list of supported languages
        Get a list of supported languages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/languages"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLanguagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Language]])
                res.languages = out

        return res

    
    def get_swagger_json(self) -> operations.GetSwaggerJSONResponse:
        r"""Get Swagger JSON
        Get Swagger JSON
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/swagger"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSwaggerJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_swagger_json_200_application_json_object = out

        return res

    