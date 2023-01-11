import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Platform:
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

    
    def get_platform(self, request: operations.GetPlatformRequest) -> operations.GetPlatformResponse:
        r"""Platform Detail
        Return the content of the selected platform.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/platform/{platformId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlatformResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_platform_200_application_json_object = out

        return res

    
    def list_platform_regions(self, request: operations.ListPlatformRegionsRequest) -> operations.ListPlatformRegionsResponse:
        r"""Platform Region Collection
        Return a list of regions for a platform.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/platform/{platformId}/region", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPlatformRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.list_platform_regions_200_application_json_object = out

        return res

    
    def list_platforms(self, request: operations.ListPlatformsRequest) -> operations.ListPlatformsResponse:
        r"""Platform Collection
        Return a list of available platforms.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPlatformsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.list_platforms_200_application_json_object = out

        return res

    