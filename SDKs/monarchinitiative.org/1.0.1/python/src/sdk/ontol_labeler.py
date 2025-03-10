import requests
from sdk.models import operations
from . import utils

class OntolLabeler:
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

    
    def get_ontol_labeler_resource(self, request: operations.GetOntolLabelerResourceRequest) -> operations.GetOntolLabelerResourceResponse:
        r"""Fetches a map from CURIEs/IDs to labels
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ontol/labeler/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOntolLabelerResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    