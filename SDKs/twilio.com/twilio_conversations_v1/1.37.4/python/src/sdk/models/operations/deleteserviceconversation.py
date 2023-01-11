import dataclasses
from typing import Optional
from enum import Enum
from ..shared import service_conversation_enum_webhook_enabled_type_enum as shared_service_conversation_enum_webhook_enabled_type_enum
from ..shared import security as shared_security


DELETE_SERVICE_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class DeleteServiceConversationPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteServiceConversationHeaders:
    x_twilio_webhook_enabled: Optional[shared_service_conversation_enum_webhook_enabled_type_enum.ServiceConversationEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteServiceConversationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteServiceConversationRequest:
    headers: DeleteServiceConversationHeaders = dataclasses.field()
    path_params: DeleteServiceConversationPathParams = dataclasses.field()
    security: DeleteServiceConversationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteServiceConversationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
