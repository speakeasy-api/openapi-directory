import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Public:
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

    
    def get_latest_agent_version(self) -> operations.GetLatestAgentVersionResponse:
        r"""Returns latest agent version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/releases/agent/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestAgentVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComponentVersion])
                res.component_version = out

        return res

    
    def get_latest_platform_version(self) -> operations.GetLatestPlatformVersionResponse:
        r"""Returns latest platform version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/releases/platform/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestPlatformVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComponentVersion])
                res.component_version = out

        return res

    
    def get_latest_scanner_version(self) -> operations.GetLatestScannerVersionResponse:
        r"""Returns latest scanner version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/releases/scanner/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestScannerVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComponentVersion])
                res.component_version = out

        return res

    