import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import integrations as shared_integrations


@dataclasses.dataclass
class GetTargetsTargetIDIntegrationsPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDIntegrations401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDIntegrations403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDIntegrationsRequest:
    path_params: GetTargetsTargetIDIntegrationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDIntegrationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    integrations: Optional[shared_integrations.Integrations] = dataclasses.field(default=None)
    get_targets_target_id_integrations_401_application_json_object: Optional[GetTargetsTargetIDIntegrations401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_integrations_403_application_json_object: Optional[GetTargetsTargetIDIntegrations403ApplicationJSON] = dataclasses.field(default=None)
    
