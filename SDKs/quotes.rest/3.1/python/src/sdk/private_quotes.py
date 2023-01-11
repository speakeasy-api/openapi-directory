import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class PrivateQuotes:
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

    
    def delete_quote(self, request: operations.DeleteQuoteRequest) -> operations.DeleteQuoteResponse:
        r"""Delete a quote. The user needs to be the owner of the quote to be able to delete it.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteQuoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_quote(self, request: operations.GetQuoteRequest) -> operations.GetQuoteResponse:
        r"""Gets a `Quote` with a given `id`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.quote_response = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_quote_list(self, request: operations.GetQuoteListRequest) -> operations.GetQuoteListResponse:
        r"""Get the list of quotes in your private collection.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def patch_quote(self, request: operations.PatchQuoteRequest) -> operations.PatchQuoteResponse:
        r"""Update a quote
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchQuoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def post_quote(self, request: operations.PostQuoteRequest) -> operations.PostQuoteResponse:
        r"""Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQuoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def post_quote_tags_add(self, request: operations.PostQuoteTagsAddRequest) -> operations.PostQuoteTagsAddResponse:
        r"""Add a tag to a given Quote.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/tags/add"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQuoteTagsAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_quote_tags_remove(self, request: operations.PostQuoteTagsRemoveRequest) -> operations.PostQuoteTagsRemoveResponse:
        r"""Remove a tag from a given quote.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/tags/remove"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQuoteTagsRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_quote(self, request: operations.PutQuoteRequest) -> operations.PutQuoteResponse:
        r"""Add a new quote to your private collection.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutQuoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    