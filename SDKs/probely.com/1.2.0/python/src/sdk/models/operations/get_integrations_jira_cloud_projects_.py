import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jiraproject as shared_jiraproject


@dataclass_json
@dataclasses.dataclass
class GetIntegrationsJiraCloudProjects401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetIntegrationsJiraCloudProjects403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetIntegrationsJiraCloudProjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    jira_projects: Optional[list[shared_jiraproject.JiraProject]] = dataclasses.field(default=None)
    get_integrations_jira_cloud_projects_401_application_json_object: Optional[GetIntegrationsJiraCloudProjects401ApplicationJSON] = dataclasses.field(default=None)
    get_integrations_jira_cloud_projects_403_application_json_object: Optional[GetIntegrationsJiraCloudProjects403ApplicationJSON] = dataclasses.field(default=None)
    
