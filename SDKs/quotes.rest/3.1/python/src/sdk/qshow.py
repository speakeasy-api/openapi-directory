import requests
from sdk.models import operations
from . import utils

class Qshow:
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

    
    def delete_qshow(self, request: operations.DeleteQshowRequest) -> operations.DeleteQshowResponse:
        r"""Delete a qshow.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/qshow"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteQshowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_qshow(self, request: operations.GetQshowRequest) -> operations.GetQshowResponse:
        r"""Gets a details about a qshow.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/qshow"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQshowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_qshow_list(self, request: operations.GetQshowListRequest) -> operations.GetQshowListResponse:
        r"""Get the list of Qshows in They Said So platform.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/qshow/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQshowListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_qshow_quotes(self, request: operations.GetQshowQuotesRequest) -> operations.GetQshowQuotesResponse:
        r"""Get the quotes in a given Qshow.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/qshow/quotes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQshowQuotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def patch_qshow(self, request: operations.PatchQshowRequest) -> operations.PatchQshowResponse:
        r"""Update an existing qshow.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/qshow"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchQshowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_qshow_quotes_add(self, request: operations.PostQshowQuotesAddRequest) -> operations.PostQshowQuotesAddResponse:
        r"""Add a quote to a given Qshow.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/qshow/quotes/add"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQshowQuotesAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_qshow_quotes_remove(self, request: operations.PostQshowQuotesRemoveRequest) -> operations.PostQshowQuotesRemoveResponse:
        r"""Remove a quote to a given Qshow.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/qshow/quotes/remove"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQshowQuotesRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_qshow(self, request: operations.PutQshowRequest) -> operations.PutQshowResponse:
        r"""Create and add a new qshow to your private collection.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/qshow"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutQshowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    