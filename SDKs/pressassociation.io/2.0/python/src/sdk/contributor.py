import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Contributor:
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

    
    def get_contributor(self, request: operations.GetContributorRequest) -> operations.GetContributorResponse:
        r"""Contributor Detail
        Return the content of the selected contributor.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/contributor/{contributorId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContributorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_contributor_200_application_json_object = out

        return res

    
    def list_contributor(self, request: operations.ListContributorRequest) -> operations.ListContributorResponse:
        r"""Contributor Collection
        Return a collection of Contributors.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/contributor"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListContributorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.list_contributor_200_application_json_object = out

        return res

    