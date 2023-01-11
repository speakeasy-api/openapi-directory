

import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils


from .v1 import V1
from .v2 import V2


SERVERS = [
	"http://openaq.local",
]


class SDK:
    
    v1: V1
    v2: V2

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def favico_favicon_ico_get(self) -> operations.FavicoFaviconIcoGetResponse:
        r"""Favico
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/favicon.ico"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FavicoFaviconIcoGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.favico_favicon_ico_get_200_application_json_any = out

        return res

    
    def pong_ping_get(self) -> operations.PongPingGetResponse:
        r"""Pong
        Sanity check.
        This will let the user know that the service is operational.
        And this path operation will:
        * show a lifesign
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ping"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PongPingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pong_ping_get_200_application_json_any = out

        return res

    