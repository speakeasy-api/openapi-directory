import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Graph:
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

    
    def get_edge_resource(self, request: operations.GetEdgeResourceRequest) -> operations.GetEdgeResourceResponse:
        r"""Returns edges emanating from a given node
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/graph/edges/from/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEdgeResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Graph]])
                res.graphs = out

        return res

    
    def get_node_resource(self, request: operations.GetNodeResourceRequest) -> operations.GetNodeResourceResponse:
        r"""Returns a graph node
        A node is an abstract representation of some kind of entity. The entity may be a physical thing such as a patient,
        a molecular entity such as a gene or protein, or a conceptual entity such as a class from an ontology.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/graph/node/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodeResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.BioObject]])
                res.bio_objects = out

        return res

    