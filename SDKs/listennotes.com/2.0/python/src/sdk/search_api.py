import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SearchAPI:
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

    
    def search(self, request: operations.SearchRequest) -> operations.SearchResponse:
        r"""Full-text search
        Full-text search on episodes, podcasts, or curated lists of podcasts.
        Use the `offset` parameter to paginate through search results.
        The FREE plan allows to see up to 30 search results (or `offset` < 30) per query.
        The PRO plan allows to see up to 300 search results (or `offset` < 300) per query.
        The ENTERPRISE plan allows to see up to 10,000 search results (or `offset` < 10000) per query.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def typeahead(self, request: operations.TypeaheadRequest) -> operations.TypeaheadResponse:
        r"""Typeahead search
        Suggest search terms, podcast genres, and podcasts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/typeahead"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TypeaheadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TypeaheadResponse])
                res.typeahead_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    