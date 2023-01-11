import requests
from sdk.models import operations
from . import utils

class Wikis:
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

    
    def wiki_content(self, request: operations.WikiContentRequest) -> operations.WikiContentResponse:
        r"""Retrieve the Content of a Wiki
        Retrieves the plaintext content of a wiki in markdown format.
        #### Returns
        Returns `text/markdown` of the wiki content itself.
        If the request is unsuccessful, plaintext with the error message will be displayed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wikis/{wiki_id}/content/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WikiContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def wiki_read(self, request: operations.WikiReadRequest) -> operations.WikiReadResponse:
        r"""Retrieve a Wiki
        Retrieves the details about a specific wiki.
        A wiki is a collection of markdown text pages that can be used to describe the project or dataset of contained in the attached node.
        #### Returns
        Returns a JSON object with a `data` key containing the representation of the requested wiki, if the request was successful.
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wikis/{wiki_id}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WikiReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    