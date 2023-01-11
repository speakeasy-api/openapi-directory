import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook as shared_webhook
from ..shared import webhook as shared_webhook


@dataclasses.dataclass
class PatchWebhooksIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchWebhooksID400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchWebhooksID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchWebhooksID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchWebhooksID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PatchWebhooksIDRequest:
    path_params: PatchWebhooksIDPathParams = dataclasses.field()
    request: shared_webhook.WebhookInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchWebhooksIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook: Optional[shared_webhook.Webhook] = dataclasses.field(default=None)
    patch_webhooks_id_400_application_json_object: Optional[PatchWebhooksID400ApplicationJSON] = dataclasses.field(default=None)
    patch_webhooks_id_401_application_json_object: Optional[PatchWebhooksID401ApplicationJSON] = dataclasses.field(default=None)
    patch_webhooks_id_403_application_json_object: Optional[PatchWebhooksID403ApplicationJSON] = dataclasses.field(default=None)
    patch_webhooks_id_404_application_json_object: Optional[PatchWebhooksID404ApplicationJSON] = dataclasses.field(default=None)
    
