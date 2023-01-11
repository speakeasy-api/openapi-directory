import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jirascope as shared_jirascope


@dataclasses.dataclass
class PatchTargetsTargetIDIntegrationsJiraServerPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDIntegrationsJiraServer401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDIntegrationsJiraServer403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDIntegrationsJiraServer404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PatchTargetsTargetIDIntegrationsJiraServerRequest:
    path_params: PatchTargetsTargetIDIntegrationsJiraServerPathParams = dataclasses.field()
    request: shared_jirascope.JiraScope = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchTargetsTargetIDIntegrationsJiraServerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    jira_scope: Optional[shared_jirascope.JiraScope] = dataclasses.field(default=None)
    patch_targets_target_id_integrations_jira_server_401_application_json_object: Optional[PatchTargetsTargetIDIntegrationsJiraServer401ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_integrations_jira_server_403_application_json_object: Optional[PatchTargetsTargetIDIntegrationsJiraServer403ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_integrations_jira_server_404_application_json_object: Optional[PatchTargetsTargetIDIntegrationsJiraServer404ApplicationJSON] = dataclasses.field(default=None)
    
