import requests
from sdk.models import operations
from . import utils

class V2:
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

    
    def get_discovery_v2_suggest(self, request: operations.GetDiscoveryV2SuggestRequest) -> operations.GetDiscoveryV2SuggestResponse:
        r"""Find Suggest
        Find search suggestions and filter your suggestions by location, source, etc.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/discovery/v2/suggest"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiscoveryV2SuggestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json; charset=utf-8"):
                res.get_discovery_v2_suggest_200_application_hal_plus_json_string = r.content
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                res.get_discovery_v2_suggest_200_application_json_string = r.content

        return res

    