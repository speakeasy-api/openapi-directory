import requests
from sdk.models import operations
from . import utils

class Sslp:
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

    
    def get_mapped_sslp_by_position_using_get(self, request: operations.GetMappedSslpByPositionUsingGetRequest) -> operations.GetMappedSslpByPositionUsingGetResponse:
        r"""Returns a list SSLP for given position and assembly map
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sslps/mapped/{chr}/{start}/{stop}/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMappedSslpByPositionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    