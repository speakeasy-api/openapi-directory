import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_configuration_service_notification as shared_conversations_v1_service_service_configuration_service_notification


UPDATE_SERVICE_NOTIFICATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateServiceNotificationPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceNotificationUpdateServiceNotificationRequest:
    added_to_conversation_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AddedToConversation.Enabled' }})
    added_to_conversation_sound: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AddedToConversation.Sound' }})
    added_to_conversation_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AddedToConversation.Template' }})
    log_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LogEnabled' }})
    new_message_badge_count_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NewMessage.BadgeCountEnabled' }})
    new_message_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NewMessage.Enabled' }})
    new_message_sound: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NewMessage.Sound' }})
    new_message_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NewMessage.Template' }})
    new_message_with_media_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NewMessage.WithMedia.Enabled' }})
    new_message_with_media_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NewMessage.WithMedia.Template' }})
    removed_from_conversation_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RemovedFromConversation.Enabled' }})
    removed_from_conversation_sound: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RemovedFromConversation.Sound' }})
    removed_from_conversation_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RemovedFromConversation.Template' }})
    

@dataclasses.dataclass
class UpdateServiceNotificationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceNotificationRequest:
    path_params: UpdateServiceNotificationPathParams = dataclasses.field()
    security: UpdateServiceNotificationSecurity = dataclasses.field()
    request: Optional[UpdateServiceNotificationUpdateServiceNotificationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceNotificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_configuration_service_notification: Optional[shared_conversations_v1_service_service_configuration_service_notification.ConversationsV1ServiceServiceConfigurationServiceNotification] = dataclasses.field(default=None)
    
