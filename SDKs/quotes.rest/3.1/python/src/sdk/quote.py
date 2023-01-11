import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Quote:
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

    
    def delete_quote_dislike(self, request: operations.DeleteQuoteDislikeRequest) -> operations.DeleteQuoteDislikeResponse:
        r"""Remove the disLike for the given Quote as a user of the API Key.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/dislike"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteQuoteDislikeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_quote_like(self, request: operations.DeleteQuoteLikeRequest) -> operations.DeleteQuoteLikeResponse:
        r"""Remove the Like for the given Quote as a user of the API Key.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/like"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteQuoteLikeResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_quote_authors_popular(self, request: operations.GetQuoteAuthorsPopularRequest) -> operations.GetQuoteAuthorsPopularResponse:
        r"""Gets a list of popular author names in the system. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/authors/popular"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteAuthorsPopularResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_quote_authors_search(self, request: operations.GetQuoteAuthorsSearchRequest) -> operations.GetQuoteAuthorsSearchResponse:
        r"""Gets a list of author names in the system. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/authors/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteAuthorsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_quote_categories_popular(self, request: operations.GetQuoteCategoriesPopularRequest) -> operations.GetQuoteCategoriesPopularResponse:
        r"""Gets a list of popular `Quote` Categories.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/categories/popular"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteCategoriesPopularResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_quote_categories_search(self, request: operations.GetQuoteCategoriesSearchRequest) -> operations.GetQuoteCategoriesSearchResponse:
        r"""Gets a list of `Quote` Categories matching the query string.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/categories/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteCategoriesSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_quote_random(self, request: operations.GetQuoteRandomRequest) -> operations.GetQuoteRandomResponse:
        r"""Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/random"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteRandomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.quote_response = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_quote_search(self, request: operations.GetQuoteSearchRequest) -> operations.GetQuoteSearchResponse:
        r"""Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.quote_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_quote_dislike(self, request: operations.PostQuoteDislikeRequest) -> operations.PostQuoteDislikeResponse:
        r"""Dislike the given Quote as a user of the API Key. Same as `put` but a convenient alias for those clients that don't support `put` cleanly.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/dislike"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQuoteDislikeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_quote_like(self, request: operations.PostQuoteLikeRequest) -> operations.PostQuoteLikeResponse:
        r"""Like the given Quote as a user of the API Key. Same as `PUT` but a convenient alias for those clients that don't support `PUT` cleanly.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/like"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQuoteLikeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_quote_dislike(self, request: operations.PutQuoteDislikeRequest) -> operations.PutQuoteDislikeResponse:
        r"""Dislike the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/dislike"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutQuoteDislikeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_quote_like(self, request: operations.PutQuoteLikeRequest) -> operations.PutQuoteLikeResponse:
        r"""Like the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quote/like"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutQuoteLikeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    