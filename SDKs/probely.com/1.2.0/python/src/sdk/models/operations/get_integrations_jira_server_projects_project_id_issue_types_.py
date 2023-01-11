import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jiraissuetype as shared_jiraissuetype


@dataclasses.dataclass
class GetIntegrationsJiraServerProjectsProjectIDIssueTypesPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetIntegrationsJiraServerProjectsProjectIDIssueTypes401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetIntegrationsJiraServerProjectsProjectIDIssueTypes403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetIntegrationsJiraServerProjectsProjectIDIssueTypes404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetIntegrationsJiraServerProjectsProjectIDIssueTypesRequest:
    path_params: GetIntegrationsJiraServerProjectsProjectIDIssueTypesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIntegrationsJiraServerProjectsProjectIDIssueTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    jira_issue_types: Optional[list[shared_jiraissuetype.JiraIssueType]] = dataclasses.field(default=None)
    get_integrations_jira_server_projects_project_id_issue_types_401_application_json_object: Optional[GetIntegrationsJiraServerProjectsProjectIDIssueTypes401ApplicationJSON] = dataclasses.field(default=None)
    get_integrations_jira_server_projects_project_id_issue_types_403_application_json_object: Optional[GetIntegrationsJiraServerProjectsProjectIDIssueTypes403ApplicationJSON] = dataclasses.field(default=None)
    get_integrations_jira_server_projects_project_id_issue_types_404_application_json_object: Optional[GetIntegrationsJiraServerProjectsProjectIDIssueTypes404ApplicationJSON] = dataclasses.field(default=None)
    
