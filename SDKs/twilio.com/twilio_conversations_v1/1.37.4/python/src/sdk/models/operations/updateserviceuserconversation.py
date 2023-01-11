import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import service_user_conversation_enum_notification_level_enum as shared_service_user_conversation_enum_notification_level_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_user_service_user_conversation as shared_conversations_v1_service_service_user_service_user_conversation


UPDATE_SERVICE_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateServiceUserConversationPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    user_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceUserConversationUpdateServiceUserConversationRequest:
    last_read_message_index: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LastReadMessageIndex' }})
    last_read_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LastReadTimestamp' }})
    notification_level: Optional[shared_service_user_conversation_enum_notification_level_enum.ServiceUserConversationEnumNotificationLevelEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NotificationLevel' }})
    

@dataclasses.dataclass
class UpdateServiceUserConversationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceUserConversationRequest:
    path_params: UpdateServiceUserConversationPathParams = dataclasses.field()
    security: UpdateServiceUserConversationSecurity = dataclasses.field()
    request: Optional[UpdateServiceUserConversationUpdateServiceUserConversationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceUserConversationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_user_service_user_conversation: Optional[shared_conversations_v1_service_service_user_service_user_conversation.ConversationsV1ServiceServiceUserServiceUserConversation] = dataclasses.field(default=None)
    
