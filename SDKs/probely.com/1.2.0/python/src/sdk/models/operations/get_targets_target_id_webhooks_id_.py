import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook as shared_webhook


@dataclasses.dataclass
class GetTargetsTargetIDWebhooksIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDWebhooksID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDWebhooksID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDWebhooksIDRequest:
    path_params: GetTargetsTargetIDWebhooksIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDWebhooksIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook: Optional[shared_webhook.Webhook] = dataclasses.field(default=None)
    get_targets_target_id_webhooks_id_401_application_json_object: Optional[GetTargetsTargetIDWebhooksID401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_webhooks_id_403_application_json_object: Optional[GetTargetsTargetIDWebhooksID403ApplicationJSON] = dataclasses.field(default=None)
    
