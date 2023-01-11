import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class JiraServerIntegration:
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

    
    def get_integrations_jira_server_projects_(self) -> operations.GetIntegrationsJiraServerProjectsResponse:
        r"""List Jira Projects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/integrations/jira-server/projects/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsJiraServerProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.JiraProject]])
                res.jira_projects = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraServerProjects401ApplicationJSON])
                res.get_integrations_jira_server_projects_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraServerProjects403ApplicationJSON])
                res.get_integrations_jira_server_projects_403_application_json_object = out

        return res

    
    def get_integrations_jira_server_projects_project_id_issue_types_(self, request: operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesRequest) -> operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesResponse:
        r"""Retrieve project issue types
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/integrations/jira-server/projects/{project_id}/issue_types/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.JiraIssueType]])
                res.jira_issue_types = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypes401ApplicationJSON])
                res.get_integrations_jira_server_projects_project_id_issue_types_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypes403ApplicationJSON])
                res.get_integrations_jira_server_projects_project_id_issue_types_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypes404ApplicationJSON])
                res.get_integrations_jira_server_projects_project_id_issue_types_404_application_json_object = out

        return res

    
    def get_integrations_jira_server_projects_project_id_issue_types_issue_type_id_priorities_(self, request: operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPrioritiesRequest) -> operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPrioritiesResponse:
        r"""Retrieve issue priorities
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/priorities/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPrioritiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.JiraIssuePriority]])
                res.jira_issue_priorities = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSON])
                res.get_integrations_jira_server_projects_project_id_issue_types_issue_type_id_priorities_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSON])
                res.get_integrations_jira_server_projects_project_id_issue_types_issue_type_id_priorities_403_application_json_object = out

        return res

    
    def get_integrations_jira_server_projects_project_id_issue_types_issue_type_id_status_(self, request: operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatusRequest) -> operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatusResponse:
        r"""Retrieve issue statuses
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/status/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.JiraIssueStatus]])
                res.jira_issue_statuses = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSON])
                res.get_integrations_jira_server_projects_project_id_issue_types_issue_type_id_status_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSON])
                res.get_integrations_jira_server_projects_project_id_issue_types_issue_type_id_status_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSON])
                res.get_integrations_jira_server_projects_project_id_issue_types_issue_type_id_status_404_application_json_object = out

        return res

    
    def get_targets_target_id_findings_id_integrations_jira_server_(self, request: operations.GetTargetsTargetIDFindingsIDIntegrationsJiraServerRequest) -> operations.GetTargetsTargetIDFindingsIDIntegrationsJiraServerResponse:
        r"""Retrieve Jira Server finding configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/{id}/integrations/jira-server/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDFindingsIDIntegrationsJiraServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JiraFinding])
                res.jira_finding = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSON])
                res.get_targets_target_id_findings_id_integrations_jira_server_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSON])
                res.get_targets_target_id_findings_id_integrations_jira_server_403_application_json_object = out

        return res

    
    def get_targets_target_id_integrations_jira_server_(self, request: operations.GetTargetsTargetIDIntegrationsJiraServerRequest) -> operations.GetTargetsTargetIDIntegrationsJiraServerResponse:
        r"""Retrieve Jira Server Target configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/integrations/jira-server/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDIntegrationsJiraServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JiraScope])
                res.jira_scope = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDIntegrationsJiraServer401ApplicationJSON])
                res.get_targets_target_id_integrations_jira_server_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDIntegrationsJiraServer403ApplicationJSON])
                res.get_targets_target_id_integrations_jira_server_403_application_json_object = out

        return res

    
    def patch_targets_target_id_findings_id_integrations_jira_server_(self, request: operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraServerRequest) -> operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraServerResponse:
        r"""Update Jira Server finding configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/{id}/integrations/jira-server/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JiraFinding])
                res.jira_finding = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSON])
                res.patch_targets_target_id_findings_id_integrations_jira_server_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSON])
                res.patch_targets_target_id_findings_id_integrations_jira_server_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraServer404ApplicationJSON])
                res.patch_targets_target_id_findings_id_integrations_jira_server_404_application_json_object = out

        return res

    
    def patch_targets_target_id_integrations_jira_server_(self, request: operations.PatchTargetsTargetIDIntegrationsJiraServerRequest) -> operations.PatchTargetsTargetIDIntegrationsJiraServerResponse:
        r"""Update Jira Server target configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/integrations/jira-server/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchTargetsTargetIDIntegrationsJiraServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JiraScope])
                res.jira_scope = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDIntegrationsJiraServer401ApplicationJSON])
                res.patch_targets_target_id_integrations_jira_server_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDIntegrationsJiraServer403ApplicationJSON])
                res.patch_targets_target_id_integrations_jira_server_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDIntegrationsJiraServer404ApplicationJSON])
                res.patch_targets_target_id_integrations_jira_server_404_application_json_object = out

        return res

    
    def put_targets_target_id_findings_id_integrations_jira_server_(self, request: operations.PutTargetsTargetIDFindingsIDIntegrationsJiraServerRequest) -> operations.PutTargetsTargetIDFindingsIDIntegrationsJiraServerResponse:
        r"""Update Jira Server finding configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/{id}/integrations/jira-server/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTargetsTargetIDFindingsIDIntegrationsJiraServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JiraFinding])
                res.jira_finding = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSON])
                res.put_targets_target_id_findings_id_integrations_jira_server_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSON])
                res.put_targets_target_id_findings_id_integrations_jira_server_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDFindingsIDIntegrationsJiraServer404ApplicationJSON])
                res.put_targets_target_id_findings_id_integrations_jira_server_404_application_json_object = out

        return res

    
    def put_targets_target_id_integrations_jira_server_(self, request: operations.PutTargetsTargetIDIntegrationsJiraServerRequest) -> operations.PutTargetsTargetIDIntegrationsJiraServerResponse:
        r"""Update Jira Server target configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/integrations/jira-server/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTargetsTargetIDIntegrationsJiraServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JiraScope])
                res.jira_scope = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDIntegrationsJiraServer401ApplicationJSON])
                res.put_targets_target_id_integrations_jira_server_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDIntegrationsJiraServer403ApplicationJSON])
                res.put_targets_target_id_integrations_jira_server_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDIntegrationsJiraServer404ApplicationJSON])
                res.put_targets_target_id_integrations_jira_server_404_application_json_object = out

        return res

    