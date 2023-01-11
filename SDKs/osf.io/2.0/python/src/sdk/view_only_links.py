import requests
from sdk.models import operations
from . import utils

class ViewOnlyLinks:
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

    
    def view_only_links_node_list(self, request: operations.ViewOnlyLinksNodeListRequest) -> operations.ViewOnlyLinksNodeListResponse:
        r"""List all nodes
        
        The list of nodes which this view only link gives read-only access to.
        #### Permissions
        Only project administrators may retrieve the nodes of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/view_only_links/{link_id}/nodes/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ViewOnlyLinksNodeListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def view_only_links_read(self, request: operations.ViewOnlyLinksReadRequest) -> operations.ViewOnlyLinksReadResponse:
        r"""Retrieve a view only link
        Retrieves details about a specific view only link.
        #### Permissions
        Only project administrators may retrieve the details of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
        #### Returns
        Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/view_only_links/{link_id}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ViewOnlyLinksReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    