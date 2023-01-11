import requests
from sdk.models import operations
from . import utils

class Ontol:
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

    
    def get_extract_ontology_subgraph_resource(self, request: operations.GetExtractOntologySubgraphResourceRequest) -> operations.GetExtractOntologySubgraphResourceResponse:
        r"""Extract a subgraph from an ontology
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontol/subgraph/{ontology}/{node}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExtractOntologySubgraphResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_information_content_resource(self, request: operations.GetInformationContentResourceRequest) -> operations.GetInformationContentResourceResponse:
        r"""Returns information content (IC) for a set of relevant ontology classes
        ```
        IC = -log2( freq(t) / popSize )
        ```
        
        Here the frequency and population is calculated for a particular dataset:
        e.g. all human disease-phenotype associations
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontol/information_content/{subject_category}/{object_category}/{subject_taxon}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInformationContentResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_extract_ontology_subgraph_resource(self, request: operations.PostExtractOntologySubgraphResourceRequest) -> operations.PostExtractOntologySubgraphResourceResponse:
        r"""Extract a subgraph from an ontology
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontol/subgraph/{ontology}/{node}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostExtractOntologySubgraphResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    