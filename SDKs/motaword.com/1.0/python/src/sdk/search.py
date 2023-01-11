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

    
    def check_documents_reindex(self, request: operations.CheckDocumentsReindexRequest) -> operations.CheckDocumentsReindexResponse:
        r"""Check reindex status of the client source and translation documents.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/documents/reindex/status"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckDocumentsReindexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AsyncOperationStatus])
                res.async_operation_status = out

        return res

    
    def reindex_documents(self) -> operations.ReindexDocumentsResponse:
        r"""Reindex for search all of the client source and translation documents.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/documents/reindex"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReindexDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AsyncOperationStatus])
                res.async_operation_status = out

        return res

    
    def search_everywhere(self, request: operations.SearchEverywhereRequest) -> operations.SearchEverywhereResponse:
        r"""Search everywhere! Including projects, documents, translations...
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchEverywhereResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchEverywhereResult])
                res.search_everywhere_result = out

        return res

    