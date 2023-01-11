import requests
from sdk.models import operations
from . import utils

class Addons:
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

    
    def addons_list(self) -> operations.AddonsListResponse:
        r"""List all addons
        
        A paginated list of addons configurable with the OSF
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        
        This request should never return an error.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/addons/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddonsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    