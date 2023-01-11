import requests
from sdk.models import operations
from . import utils

class Ontology:
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

    
    def get_ont_dags_using_get(self, request: operations.GetOntDagsUsingGetRequest) -> operations.GetOntDagsUsingGetResponse:
        r"""Returns child and parent terms for Accession ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontology/ont/{accId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOntDagsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_term_using_get(self, request: operations.GetTermUsingGetRequest) -> operations.GetTermUsingGetResponse:
        r"""Returns term for Accession ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontology/term/{accId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTermUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def is_descendant_of_using_get(self, request: operations.IsDescendantOfUsingGetRequest) -> operations.IsDescendantOfUsingGetResponse:
        r"""Returns true or false for terms
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontology/term/{accId1}/{accId2}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IsDescendantOfUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    