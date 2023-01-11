import requests
from sdk.models import operations
from . import utils

class Taxonomies:
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

    
    def taxonomies_list(self) -> operations.TaxonomiesListResponse:
        r"""List all taxonomies
        
        A paginated list of all [bepress disciplines taxonomies](https://www.bepress.com/wp-content/uploads/2016/12/Digital-Commons-Disciplines-taxonomy-2017-01.pdf).
        Note: this API endpoint is under active development, and is subject to change in the future.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of up to 10 taxonomies. Each resource in the array is a separate taxonomy object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        
        This request should never return an error.
        #### Filtering
        You can optionally request that the response only include taxonomies that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/taxonomies/?filter['id']='{taxonomy_id}'.
        
        Taxonomies may be filtered by their `id`, `parents`, and `text`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/taxonomies/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxonomiesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def taxonomies_read(self, request: operations.TaxonomiesReadRequest) -> operations.TaxonomiesReadResponse:
        r"""Retrieve a taxonomy
        Retrieves the details of a taxonomy.
        #### Returns
        
        Returns a JSON object with a `data` key containing the representation of the requested taxonomy, if the request is successful.
        
        If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/taxonomies/{taxonomy_id}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxonomiesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    