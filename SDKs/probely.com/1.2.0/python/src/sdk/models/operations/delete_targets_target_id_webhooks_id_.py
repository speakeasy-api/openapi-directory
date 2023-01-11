import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteTargetsTargetIDWebhooksIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteTargetsTargetIDWebhooksID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteTargetsTargetIDWebhooksID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteTargetsTargetIDWebhooksID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class DeleteTargetsTargetIDWebhooksIDRequest:
    path_params: DeleteTargetsTargetIDWebhooksIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTargetsTargetIDWebhooksIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_targets_target_id_webhooks_id_401_application_json_object: Optional[DeleteTargetsTargetIDWebhooksID401ApplicationJSON] = dataclasses.field(default=None)
    delete_targets_target_id_webhooks_id_403_application_json_object: Optional[DeleteTargetsTargetIDWebhooksID403ApplicationJSON] = dataclasses.field(default=None)
    delete_targets_target_id_webhooks_id_404_application_json_object: Optional[DeleteTargetsTargetIDWebhooksID404ApplicationJSON] = dataclasses.field(default=None)
    
