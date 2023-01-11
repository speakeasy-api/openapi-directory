import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook as shared_webhook


@dataclasses.dataclass
class GetTargetsTargetIDWebhooksPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDWebhooks200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_total') }})
    results: Optional[list[shared_webhook.Webhook]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDWebhooks401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDWebhooks403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDWebhooksRequest:
    path_params: GetTargetsTargetIDWebhooksPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDWebhooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_webhooks_200_application_json_object: Optional[GetTargetsTargetIDWebhooks200ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_webhooks_401_application_json_object: Optional[GetTargetsTargetIDWebhooks401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_webhooks_403_application_json_object: Optional[GetTargetsTargetIDWebhooks403ApplicationJSON] = dataclasses.field(default=None)
    
