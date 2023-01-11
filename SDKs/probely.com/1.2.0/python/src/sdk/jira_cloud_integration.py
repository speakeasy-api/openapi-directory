import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class JiraCloudIntegration:
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

    
    def get_integrations_jira_cloud_projects_(self) -> operations.GetIntegrationsJiraCloudProjectsResponse:
        r"""List Jira Projects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/integrations/jira-cloud/projects/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsJiraCloudProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.JiraProject]])
                res.jira_projects = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraCloudProjects401ApplicationJSON])
                res.get_integrations_jira_cloud_projects_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraCloudProjects403ApplicationJSON])
                res.get_integrations_jira_cloud_projects_403_application_json_object = out

        return res

    
    def get_integrations_jira_cloud_projects_project_id_issue_types_(self, request: operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesRequest) -> operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesResponse:
        r"""Retrieve project issue types
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/integrations/jira-cloud/projects/{project_id}/issue_types/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.JiraIssueType]])
                res.jira_issue_types = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypes401ApplicationJSON])
                res.get_integrations_jira_cloud_projects_project_id_issue_types_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypes403ApplicationJSON])
                res.get_integrations_jira_cloud_projects_project_id_issue_types_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypes404ApplicationJSON])
                res.get_integrations_jira_cloud_projects_project_id_issue_types_404_application_json_object = out

        return res

    
    def get_integrations_jira_cloud_projects_project_id_issue_types_issue_type_id_priorities_(self, request: operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesRequest) -> operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesResponse:
        r"""Retrieve issue priorities
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/integrations/jira-cloud/projects/{project_id}/issue_types/{issue_type_id}/priorities/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.JiraIssuePriority]])
                res.jira_issue_priorities = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSON])
                res.get_integrations_jira_cloud_projects_project_id_issue_types_issue_type_id_priorities_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSON])
                res.get_integrations_jira_cloud_projects_project_id_issue_types_issue_type_id_priorities_403_application_json_object = out

        return res

    
    def get_integrations_jira_cloud_projects_project_id_issue_types_issue_type_id_status_(self, request: operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusRequest) -> operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusResponse:
        r"""Retrieve issue statuses
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/integrations/jira-cloud/projects/{project_id}/issue_types/{issue_type_id}/status/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.JiraIssueStatus]])
                res.jira_issue_statuses = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSON])
                res.get_integrations_jira_cloud_projects_project_id_issue_types_issue_type_id_status_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSON])
                res.get_integrations_jira_cloud_projects_project_id_issue_types_issue_type_id_status_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSON])
                res.get_integrations_jira_cloud_projects_project_id_issue_types_issue_type_id_status_404_application_json_object = out

        return res

    
    def get_targets_target_id_findings_id_integrations_jira_cloud_(self, request: operations.GetTargetsTargetIDFindingsIDIntegrationsJiraCloudRequest) -> operations.GetTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse:
        r"""Retrieve Jira Cloud finding configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/{id}/integrations/jira-cloud/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JiraFinding])
                res.jira_finding = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON])
                res.get_targets_target_id_findings_id_integrations_jira_cloud_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON])
                res.get_targets_target_id_findings_id_integrations_jira_cloud_403_application_json_object = out

        return res

    
    def get_targets_target_id_integrations_jira_cloud_(self, request: operations.GetTargetsTargetIDIntegrationsJiraCloudRequest) -> operations.GetTargetsTargetIDIntegrationsJiraCloudResponse:
        r"""Retrieve Jira Cloud Target configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/integrations/jira-cloud/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDIntegrationsJiraCloudResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JiraScope])
                res.jira_scope = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON])
                res.get_targets_target_id_integrations_jira_cloud_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON])
                res.get_targets_target_id_integrations_jira_cloud_403_application_json_object = out

        return res

    
    def patch_targets_target_id_findings_id_integrations_jira_cloud_(self, request: operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudRequest) -> operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse:
        r"""Update Jira Cloud finding configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/{id}/integrations/jira-cloud/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JiraFinding])
                res.jira_finding = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON])
                res.patch_targets_target_id_findings_id_integrations_jira_cloud_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON])
                res.patch_targets_target_id_findings_id_integrations_jira_cloud_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSON])
                res.patch_targets_target_id_findings_id_integrations_jira_cloud_404_application_json_object = out

        return res

    
    def patch_targets_target_id_integrations_jira_cloud_(self, request: operations.PatchTargetsTargetIDIntegrationsJiraCloudRequest) -> operations.PatchTargetsTargetIDIntegrationsJiraCloudResponse:
        r"""Update Jira Cloud target configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/integrations/jira-cloud/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchTargetsTargetIDIntegrationsJiraCloudResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JiraScope])
                res.jira_scope = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON])
                res.patch_targets_target_id_integrations_jira_cloud_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON])
                res.patch_targets_target_id_integrations_jira_cloud_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDIntegrationsJiraCloud404ApplicationJSON])
                res.patch_targets_target_id_integrations_jira_cloud_404_application_json_object = out

        return res

    
    def put_targets_target_id_findings_id_integrations_jira_cloud_(self, request: operations.PutTargetsTargetIDFindingsIDIntegrationsJiraCloudRequest) -> operations.PutTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse:
        r"""Update Jira Cloud finding configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/{id}/integrations/jira-cloud/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JiraFinding])
                res.jira_finding = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON])
                res.put_targets_target_id_findings_id_integrations_jira_cloud_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON])
                res.put_targets_target_id_findings_id_integrations_jira_cloud_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSON])
                res.put_targets_target_id_findings_id_integrations_jira_cloud_404_application_json_object = out

        return res

    
    def put_targets_target_id_integrations_jira_cloud_(self, request: operations.PutTargetsTargetIDIntegrationsJiraCloudRequest) -> operations.PutTargetsTargetIDIntegrationsJiraCloudResponse:
        r"""Update Jira Cloud target configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/integrations/jira-cloud/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTargetsTargetIDIntegrationsJiraCloudResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JiraScope])
                res.jira_scope = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON])
                res.put_targets_target_id_integrations_jira_cloud_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON])
                res.put_targets_target_id_integrations_jira_cloud_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDIntegrationsJiraCloud404ApplicationJSON])
                res.put_targets_target_id_integrations_jira_cloud_404_application_json_object = out

        return res

    