import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import webhookresponse as shared_webhookresponse


@dataclasses.dataclass
class WebhooksSubscribePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class WebhooksSubscribeRequestBody:
    event_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTypes') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclasses.dataclass
class WebhooksSubscribeSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebhooksSubscribeRequest:
    path_params: WebhooksSubscribePathParams = dataclasses.field()
    request: WebhooksSubscribeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: WebhooksSubscribeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebhooksSubscribeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_response: Optional[shared_webhookresponse.WebhookResponse] = dataclasses.field(default=None)
    
