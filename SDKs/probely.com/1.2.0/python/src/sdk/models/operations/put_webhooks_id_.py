import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook as shared_webhook
from ..shared import webhook as shared_webhook


@dataclasses.dataclass
class PutWebhooksIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutWebhooksID400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PutWebhooksID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PutWebhooksID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PutWebhooksID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PutWebhooksIDRequest:
    path_params: PutWebhooksIDPathParams = dataclasses.field()
    request: shared_webhook.WebhookInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutWebhooksIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook: Optional[shared_webhook.Webhook] = dataclasses.field(default=None)
    put_webhooks_id_400_application_json_object: Optional[PutWebhooksID400ApplicationJSON] = dataclasses.field(default=None)
    put_webhooks_id_401_application_json_object: Optional[PutWebhooksID401ApplicationJSON] = dataclasses.field(default=None)
    put_webhooks_id_403_application_json_object: Optional[PutWebhooksID403ApplicationJSON] = dataclasses.field(default=None)
    put_webhooks_id_404_application_json_object: Optional[PutWebhooksID404ApplicationJSON] = dataclasses.field(default=None)
    
