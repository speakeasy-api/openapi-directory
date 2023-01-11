import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import service_conversation_participant_enum_webhook_enabled_type_enum as shared_service_conversation_participant_enum_webhook_enabled_type_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_conversation_service_conversation_participant as shared_conversations_v1_service_service_conversation_service_conversation_participant


UPDATE_SERVICE_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateServiceConversationParticipantPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceConversationParticipantHeaders:
    x_twilio_webhook_enabled: Optional[shared_service_conversation_participant_enum_webhook_enabled_type_enum.ServiceConversationParticipantEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest:
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
class UpdateServiceConversationParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceConversationParticipantRequest:
    headers: UpdateServiceConversationParticipantHeaders = dataclasses.field()
    path_params: UpdateServiceConversationParticipantPathParams = dataclasses.field()
    security: UpdateServiceConversationParticipantSecurity = dataclasses.field()
    request: Optional[UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceConversationParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_conversation_service_conversation_participant: Optional[shared_conversations_v1_service_service_conversation_service_conversation_participant.ConversationsV1ServiceServiceConversationServiceConversationParticipant] = dataclasses.field(default=None)
    
