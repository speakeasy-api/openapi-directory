import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jirafinding as shared_jirafinding


@dataclasses.dataclass
class GetTargetsTargetIDFindingsIDIntegrationsJiraCloudPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDFindingsIDIntegrationsJiraCloudRequest:
    path_params: GetTargetsTargetIDFindingsIDIntegrationsJiraCloudPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    jira_finding: Optional[shared_jirafinding.JiraFinding] = dataclasses.field(default=None)
    get_targets_target_id_findings_id_integrations_jira_cloud_401_application_json_object: Optional[GetTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_findings_id_integrations_jira_cloud_403_application_json_object: Optional[GetTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON] = dataclasses.field(default=None)
    
