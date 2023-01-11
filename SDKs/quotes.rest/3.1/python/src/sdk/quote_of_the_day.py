import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class QuoteOfTheDay:
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

    
    def get_qod(self, request: operations.GetQodRequest) -> operations.GetQodResponse:
        r"""Gets `Quote of the Day`. Optional `category` param determines the category of returned quote of the day
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/qod"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.quote_response = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_qod_categories(self, request: operations.GetQodCategoriesRequest) -> operations.GetQodCategoriesResponse:
        r"""Gets a list of `Quote of the Day` Categories.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/qod/categories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQodCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_qod_languages(self, request: operations.GetQodLanguagesRequest) -> operations.GetQodLanguagesResponse:
        r"""Gets a list of supported languages for `Quote of the Day`. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/qod/languages"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQodLanguagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    