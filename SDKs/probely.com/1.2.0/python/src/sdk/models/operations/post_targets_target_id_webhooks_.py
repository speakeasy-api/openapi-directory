import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook as shared_webhook
from ..shared import webhook as shared_webhook


@dataclasses.dataclass
class PostTargetsTargetIDWebhooksPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDWebhooks400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDWebhooks401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDWebhooks403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDWebhooks404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostTargetsTargetIDWebhooksRequest:
    path_params: PostTargetsTargetIDWebhooksPathParams = dataclasses.field()
    request: shared_webhook.WebhookInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTargetsTargetIDWebhooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook: Optional[shared_webhook.Webhook] = dataclasses.field(default=None)
    post_targets_target_id_webhooks_400_application_json_object: Optional[PostTargetsTargetIDWebhooks400ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_webhooks_401_application_json_object: Optional[PostTargetsTargetIDWebhooks401ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_webhooks_403_application_json_object: Optional[PostTargetsTargetIDWebhooks403ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_webhooks_404_application_json_object: Optional[PostTargetsTargetIDWebhooks404ApplicationJSON] = dataclasses.field(default=None)
    
