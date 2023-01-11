import requests
from sdk.models import operations
from . import utils

class Name:
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

    
    def get_api_name(self, request: operations.GetAPINameRequest) -> operations.GetAPINameResponse:
        r"""Get name
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Name"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPINameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_name_suggestions(self, request: operations.GetAPINameSuggestionsRequest) -> operations.GetAPINameSuggestionsResponse:
        r"""Get business name suggestions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Name/Suggestions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPINameSuggestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    