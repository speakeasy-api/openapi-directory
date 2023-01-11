import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import conversation_participant_enum_webhook_enabled_type_enum as shared_conversation_participant_enum_webhook_enabled_type_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_conversation_conversation_participant as shared_conversations_v1_conversation_conversation_participant


UPDATE_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateConversationParticipantPathParams:
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateConversationParticipantHeaders:
    x_twilio_webhook_enabled: Optional[shared_conversation_participant_enum_webhook_enabled_type_enum.ConversationParticipantEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateConversationParticipantUpdateConversationParticipantRequest:
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    identity: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Identity' }})
    last_read_message_index: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LastReadMessageIndex' }})
    last_read_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LastReadTimestamp' }})
    messaging_binding_projected_address: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MessagingBinding.ProjectedAddress' }})
    messaging_binding_proxy_address: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MessagingBinding.ProxyAddress' }})
    role_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclasses.dataclass
class UpdateConversationParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateConversationParticipantRequest:
    headers: UpdateConversationParticipantHeaders = dataclasses.field()
    path_params: UpdateConversationParticipantPathParams = dataclasses.field()
    security: UpdateConversationParticipantSecurity = dataclasses.field()
    request: Optional[UpdateConversationParticipantUpdateConversationParticipantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateConversationParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_conversation_conversation_participant: Optional[shared_conversations_v1_conversation_conversation_participant.ConversationsV1ConversationConversationParticipant] = dataclasses.field(default=None)
    
