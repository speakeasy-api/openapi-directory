import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Search:
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

    
    def get_autocomplete(self, request: operations.GetAutocompleteRequest) -> operations.GetAutocompleteResponse:
        r"""Returns list of matching concepts or entities using lexical search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/entity/autocomplete/{term}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAutocompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutocompleteResults])
                res.autocomplete_results = out

        return res

    
    def get_search_entities(self, request: operations.GetSearchEntitiesRequest) -> operations.GetSearchEntitiesResponse:
        r"""Returns list of matching concepts or entities using lexical search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/entity/{term}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResult])
                res.search_result = out

        return res

    
    def get_search_hpo_entities(self, request: operations.GetSearchHpoEntitiesRequest) -> operations.GetSearchHpoEntitiesResponse:
        r"""Returns list of matching concepts or entities using lexical search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/entity/hpo-pl/{term}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchHpoEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LayResults])
                res.lay_results = out

        return res

    