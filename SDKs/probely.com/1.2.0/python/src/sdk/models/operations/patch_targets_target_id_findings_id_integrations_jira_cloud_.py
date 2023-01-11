import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jirafinding as shared_jirafinding


@dataclasses.dataclass
class PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudRequest:
    path_params: PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudPathParams = dataclasses.field()
    request: shared_jirafinding.JiraFinding = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    jira_finding: Optional[shared_jirafinding.JiraFinding] = dataclasses.field(default=None)
    patch_targets_target_id_findings_id_integrations_jira_cloud_401_application_json_object: Optional[PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_findings_id_integrations_jira_cloud_403_application_json_object: Optional[PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_findings_id_integrations_jira_cloud_404_application_json_object: Optional[PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSON] = dataclasses.field(default=None)
    
