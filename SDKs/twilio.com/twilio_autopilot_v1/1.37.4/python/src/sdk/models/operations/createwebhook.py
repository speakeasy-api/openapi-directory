import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_webhook as shared_autopilot_v1_assistant_webhook


CREATE_WEBHOOK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class CreateWebhookPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateWebhookCreateWebhookRequest:
    events: str = dataclasses.field(metadata={'form': { 'field_name': 'Events' }})
    unique_name: str = dataclasses.field(metadata={'form': { 'field_name': 'UniqueName' }})
    webhook_url: str = dataclasses.field(metadata={'form': { 'field_name': 'WebhookUrl' }})
    webhook_method: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    

@dataclasses.dataclass
class CreateWebhookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateWebhookRequest:
    path_params: CreateWebhookPathParams = dataclasses.field()
    security: CreateWebhookSecurity = dataclasses.field()
    request: Optional[CreateWebhookCreateWebhookRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_webhook: Optional[shared_autopilot_v1_assistant_webhook.AutopilotV1AssistantWebhook] = dataclasses.field(default=None)
    
