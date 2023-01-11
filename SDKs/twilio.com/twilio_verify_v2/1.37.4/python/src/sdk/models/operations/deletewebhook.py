import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_WEBHOOK_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class DeleteWebhookPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWebhookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteWebhookRequest:
    path_params: DeleteWebhookPathParams = dataclasses.field()
    security: DeleteWebhookSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
