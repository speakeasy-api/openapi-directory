import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SlackIntegration:
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

    
    def get_targets_target_id_integrations_slack_(self, request: operations.GetTargetsTargetIDIntegrationsSlackRequest) -> operations.GetTargetsTargetIDIntegrationsSlackResponse:
        r"""Retrieve slack integration data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/integrations/slack/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDIntegrationsSlackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Slack])
                res.slack = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDIntegrationsSlack401ApplicationJSON])
                res.get_targets_target_id_integrations_slack_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDIntegrationsSlack403ApplicationJSON])
                res.get_targets_target_id_integrations_slack_403_application_json_object = out

        return res

    
    def patch_targets_target_id_integrations_slack_(self, request: operations.PatchTargetsTargetIDIntegrationsSlackRequest) -> operations.PatchTargetsTargetIDIntegrationsSlackResponse:
        r"""Update slack integration data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/integrations/slack/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchTargetsTargetIDIntegrationsSlackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Slack])
                res.slack = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDIntegrationsSlack401ApplicationJSON])
                res.patch_targets_target_id_integrations_slack_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDIntegrationsSlack403ApplicationJSON])
                res.patch_targets_target_id_integrations_slack_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDIntegrationsSlack404ApplicationJSON])
                res.patch_targets_target_id_integrations_slack_404_application_json_object = out

        return res

    
    def put_targets_target_id_integrations_slack_(self, request: operations.PutTargetsTargetIDIntegrationsSlackRequest) -> operations.PutTargetsTargetIDIntegrationsSlackResponse:
        r"""Update slack integration data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/integrations/slack/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTargetsTargetIDIntegrationsSlackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Slack])
                res.slack = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDIntegrationsSlack401ApplicationJSON])
                res.put_targets_target_id_integrations_slack_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDIntegrationsSlack403ApplicationJSON])
                res.put_targets_target_id_integrations_slack_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDIntegrationsSlack404ApplicationJSON])
                res.put_targets_target_id_integrations_slack_404_application_json_object = out

        return res

    