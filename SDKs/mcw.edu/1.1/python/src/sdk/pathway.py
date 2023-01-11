import requests
from sdk.models import operations
from . import utils

class Pathway:
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

    
    def get_pathways_with_diagrams_for_category_using_get(self, request: operations.GetPathwaysWithDiagramsForCategoryUsingGetRequest) -> operations.GetPathwaysWithDiagramsForCategoryUsingGetResponse:
        r"""Return a list of pathways based on category provided
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pathways/diagramsForCategory/{category}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPathwaysWithDiagramsForCategoryUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def search_pathways_using_get(self, request: operations.SearchPathwaysUsingGetRequest) -> operations.SearchPathwaysUsingGetResponse:
        r"""Return a list of pathways based on search term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pathways/diagrams/search/{searchString}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchPathwaysUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    