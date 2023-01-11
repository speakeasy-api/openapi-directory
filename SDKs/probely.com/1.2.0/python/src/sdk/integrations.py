import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Integrations:
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

    
    def get_integrations_(self) -> operations.GetIntegrationsResponse:
        r"""Integrations available and installed in the account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/integrations/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Integrations])
                res.integrations = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrations401ApplicationJSON])
                res.get_integrations_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrations403ApplicationJSON])
                res.get_integrations_403_application_json_object = out

        return res

    
    def get_targets_target_id_integrations_(self, request: operations.GetTargetsTargetIDIntegrationsRequest) -> operations.GetTargetsTargetIDIntegrationsResponse:
        r"""Integrations available and installed for the target
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/integrations/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDIntegrationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Integrations])
                res.integrations = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDIntegrations401ApplicationJSON])
                res.get_targets_target_id_integrations_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDIntegrations403ApplicationJSON])
                res.get_targets_target_id_integrations_403_application_json_object = out

        return res

    