import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Library:
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

    
    def get_library(self, request: operations.GetLibraryRequest) -> operations.GetLibraryResponse:
        r"""Retrieves the entire library
        Will return the entire library for the authenticated user. If size of the library exceeds server preferences (normally 500) or the value of the optional limit parameter, the result will be paginated. Paginated responses return a Link header, indicating the next URI to fetch. The resulting header value will look something like:
        
        <https://products.izettle.com/organizations/self/library?limit=X&offset=Y>; rel=\"next\"
        
        where limit is number of items in response, and offset is the current position in pagination. The rel-part in the header is the links relation to the data previously recieved. The idea is that as long as this header is present there are still items remaining to be fetched. When either the header is not present or it's value doesn't contain any \"next\" value, all items have been sent to the client.
        
        Note: The client should NOT try to extract query parameters from the URI, but rather use it as-is for the next request. Also, clients should be perpared that one Link header might contain multiple other IRIs that are not \"next\" (there will never be more than one \"next\" though). See more at:
        
            IETF: https://tools.ietf.org/html/rfc5988
            GitHub: https://developer.github.com/guides/traversing-with-pagination/
        
        If eventLogUuid is provided, the response will only include events affecting the library since that event. Such responses are normally quite small and would be a preferred method for most fat clients after retrieving the initial full library.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/library", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLibraryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LibraryResponse])
                res.library_response = out
        elif r.status_code == 412:
            pass

        return res

    