import dataclasses
from typing import Optional
from enum import Enum
from ..shared import conversation_participant_enum_webhook_enabled_type_enum as shared_conversation_participant_enum_webhook_enabled_type_enum
from ..shared import security as shared_security


DELETE_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class DeleteConversationParticipantPathParams:
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteConversationParticipantHeaders:
    x_twilio_webhook_enabled: Optional[shared_conversation_participant_enum_webhook_enabled_type_enum.ConversationParticipantEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteConversationParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteConversationParticipantRequest:
    headers: DeleteConversationParticipantHeaders = dataclasses.field()
    path_params: DeleteConversationParticipantPathParams = dataclasses.field()
    security: DeleteConversationParticipantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteConversationParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
