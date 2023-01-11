import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jiraissuepriority as shared_jiraissuepriority


@dataclasses.dataclass
class GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesPathParams:
    issue_type_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'issue_type_id', 'style': 'simple', 'explode': False }})
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesRequest:
    path_params: GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    jira_issue_priorities: Optional[list[shared_jiraissuepriority.JiraIssuePriority]] = dataclasses.field(default=None)
    get_integrations_jira_cloud_projects_project_id_issue_types_issue_type_id_priorities_401_application_json_object: Optional[GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSON] = dataclasses.field(default=None)
    get_integrations_jira_cloud_projects_project_id_issue_types_issue_type_id_priorities_403_application_json_object: Optional[GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSON] = dataclasses.field(default=None)
    
