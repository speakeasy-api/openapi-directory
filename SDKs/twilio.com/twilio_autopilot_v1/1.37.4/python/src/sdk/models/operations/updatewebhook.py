import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_webhook as shared_autopilot_v1_assistant_webhook


UPDATE_WEBHOOK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class UpdateWebhookPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateWebhookUpdateWebhookRequest:
    events: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Events' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    webhook_method: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    

@dataclasses.dataclass
class UpdateWebhookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateWebhookRequest:
    path_params: UpdateWebhookPathParams = dataclasses.field()
    security: UpdateWebhookSecurity = dataclasses.field()
    request: Optional[UpdateWebhookUpdateWebhookRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_webhook: Optional[shared_autopilot_v1_assistant_webhook.AutopilotV1AssistantWebhook] = dataclasses.field(default=None)
    
