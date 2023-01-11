import requests
from sdk.models import operations
from . import utils

class Metaschemas:
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

    
    def metaschemas_list(self) -> operations.MetaschemasListResponse:
        r"""List all metaschemas
        
        A paginated list of all active metaschemas.
        Metaschemas describe the supplemental questions that accompany a registration.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of 10 metaschemas. Each resource in the array is a separate metaschema object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        
        This request should never return an error.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metaschemas/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MetaschemasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def metaschemas_read(self, request: operations.MetaschemasReadRequest) -> operations.MetaschemasReadResponse:
        r"""Retrieve a metaschema
        Retrieves the details of a given metaschema.
        
        Metaschemas describe the supplemental questions that accompany a registration.
        
        #### Returns
        Returns a JSON object with a `data` key containing the representation of the requested metaschema, if the request is successful.
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metaschemas/{metaschema_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MetaschemasReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    