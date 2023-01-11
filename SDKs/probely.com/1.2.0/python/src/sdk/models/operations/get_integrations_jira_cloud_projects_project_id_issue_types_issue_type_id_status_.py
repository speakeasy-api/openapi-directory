import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jiraissuestatus as shared_jiraissuestatus


@dataclasses.dataclass
class GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusPathParams:
    issue_type_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'issue_type_id', 'style': 'simple', 'explode': False }})
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusRequest:
    path_params: GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    jira_issue_statuses: Optional[list[shared_jiraissuestatus.JiraIssueStatus]] = dataclasses.field(default=None)
    get_integrations_jira_cloud_projects_project_id_issue_types_issue_type_id_status_401_application_json_object: Optional[GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSON] = dataclasses.field(default=None)
    get_integrations_jira_cloud_projects_project_id_issue_types_issue_type_id_status_403_application_json_object: Optional[GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSON] = dataclasses.field(default=None)
    get_integrations_jira_cloud_projects_project_id_issue_types_issue_type_id_status_404_application_json_object: Optional[GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSON] = dataclasses.field(default=None)
    
