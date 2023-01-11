import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jirascope as shared_jirascope


@dataclasses.dataclass
class PatchTargetsTargetIDIntegrationsJiraCloudPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDIntegrationsJiraCloud404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PatchTargetsTargetIDIntegrationsJiraCloudRequest:
    path_params: PatchTargetsTargetIDIntegrationsJiraCloudPathParams = dataclasses.field()
    request: shared_jirascope.JiraScope = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchTargetsTargetIDIntegrationsJiraCloudResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    jira_scope: Optional[shared_jirascope.JiraScope] = dataclasses.field(default=None)
    patch_targets_target_id_integrations_jira_cloud_401_application_json_object: Optional[PatchTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_integrations_jira_cloud_403_application_json_object: Optional[PatchTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_integrations_jira_cloud_404_application_json_object: Optional[PatchTargetsTargetIDIntegrationsJiraCloud404ApplicationJSON] = dataclasses.field(default=None)
    
