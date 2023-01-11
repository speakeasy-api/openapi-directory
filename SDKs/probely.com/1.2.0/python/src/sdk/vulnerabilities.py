import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Vulnerabilities:
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

    
    def get_vulnerability_definitions_(self, request: operations.GetVulnerabilityDefinitionsRequest) -> operations.GetVulnerabilityDefinitionsResponse:
        r"""List vulnerability definitions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/vulnerability_definitions/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVulnerabilityDefinitionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVulnerabilityDefinitions200ApplicationJSON])
                res.get_vulnerability_definitions_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVulnerabilityDefinitions401ApplicationJSON])
                res.get_vulnerability_definitions_401_application_json_object = out

        return res

    
    def get_vulnerability_definitions_id_(self, request: operations.GetVulnerabilityDefinitionsIDRequest) -> operations.GetVulnerabilityDefinitionsIDResponse:
        r"""Retrieve vulnerability definition
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/vulnerability_definitions/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVulnerabilityDefinitionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VulnerabilityDefinition])
                res.vulnerability_definition = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVulnerabilityDefinitionsID401ApplicationJSON])
                res.get_vulnerability_definitions_id_401_application_json_object = out

        return res

    