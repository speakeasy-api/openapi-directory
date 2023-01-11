import requests
from sdk.models import operations
from . import utils

class GlobalWineScore:
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

    
    def get_globalwinescores_latest_(self, request: operations.GetGlobalwinescoresLatestRequest) -> operations.GetGlobalwinescoresLatestResponse:
        r"""List all latest GWS
        Returns the latest GWS available per wine/vintage.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/globalwinescores/latest/"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGlobalwinescoresLatestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def list_historical_gws(self, request: operations.ListHistoricalGwsRequest) -> operations.ListHistoricalGwsResponse:
        r"""List all historical GWS
        Returns all available GWS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/globalwinescores/"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListHistoricalGwsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    