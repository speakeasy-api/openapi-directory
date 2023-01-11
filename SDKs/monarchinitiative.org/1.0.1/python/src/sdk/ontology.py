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

    
    def get_ontology_subset(self, request: operations.GetOntologySubsetRequest) -> operations.GetOntologySubsetResponse:
        r"""Returns meta data of an ontology subset (slim)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontology/subset/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOntologySubsetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_ontology_term(self, request: operations.GetOntologyTermRequest) -> operations.GetOntologyTermResponse:
        r"""Returns meta data of an ontology term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontology/term/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOntologyTermResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_ontology_term_graph(self, request: operations.GetOntologyTermGraphRequest) -> operations.GetOntologyTermGraphResponse:
        r"""Returns graph of an ontology term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontology/term/{id}/graph", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOntologyTermGraphResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_ontology_term_subgraph(self, request: operations.GetOntologyTermSubgraphRequest) -> operations.GetOntologyTermSubgraphResponse:
        r"""Extract a subgraph from an ontology term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontology/term/{id}/subgraph", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOntologyTermSubgraphResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_ontology_term_subsets(self, request: operations.GetOntologyTermSubsetsRequest) -> operations.GetOntologyTermSubsetsResponse:
        r"""Returns subsets (slims) associated to an ontology term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontology/term/{id}/subsets", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOntologyTermSubsetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_ontology_terms_shared_ancestor(self, request: operations.GetOntologyTermsSharedAncestorRequest) -> operations.GetOntologyTermsSharedAncestorResponse:
        r"""Returns the ancestor ontology terms shared by two ontology terms
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontology/shared/{subject}/{object}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOntologyTermsSharedAncestorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    