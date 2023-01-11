import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class OwlOntology:
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

    
    def get_dl_query(self, request: operations.GetDlQueryRequest) -> operations.GetDlQueryResponse:
        r"""Placeholder - use OWLery for now
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/owl/ontology/dlquery/{query}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDlQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Association]])
                res.associations = out

        return res

    
    def get_sparql_query(self, request: operations.GetSparqlQueryRequest) -> operations.GetSparqlQueryResponse:
        r"""Placeholder - use direct SPARQL endpoint for now
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/owl/ontology/sparql/{query}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSparqlQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Association]])
                res.associations = out

        return res

    