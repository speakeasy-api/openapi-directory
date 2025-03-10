"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import conversations_v1_service_service_configuration_service_notification as shared_conversations_v1_service_service_configuration_service_notification
from typing import Optional

UPDATE_SERVICE_NOTIFICATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateServiceNotificationSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class UpdateServiceNotificationUpdateServiceNotificationRequest:
    
    added_to_conversation_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AddedToConversation.Enabled' }})
    r"""Whether to send a notification when a participant is added to a conversation. The default is `false`."""  
    added_to_conversation_sound: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AddedToConversation.Sound' }})
    r"""The name of the sound to play when a participant is added to a conversation and `added_to_conversation.enabled` is `true`."""  
    added_to_conversation_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AddedToConversation.Template' }})
    r"""The template to use to create the notification text displayed when a participant is added to a conversation and `added_to_conversation.enabled` is `true`."""  
    log_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LogEnabled' }})
    r"""Weather the notification logging is enabled."""  
    new_message_badge_count_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NewMessage.BadgeCountEnabled' }})
    r"""Whether the new message badge is enabled. The default is `false`."""  
    new_message_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NewMessage.Enabled' }})
    r"""Whether to send a notification when a new message is added to a conversation. The default is `false`."""  
    new_message_sound: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NewMessage.Sound' }})
    r"""The name of the sound to play when a new message is added to a conversation and `new_message.enabled` is `true`."""  
    new_message_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NewMessage.Template' }})
    r"""The template to use to create the notification text displayed when a new message is added to a conversation and `new_message.enabled` is `true`."""  
    new_message_with_media_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NewMessage.WithMedia.Enabled' }})
    r"""Whether to send a notification when a new message with media/file attachments is added to a conversation. The default is `false`."""  
    new_message_with_media_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NewMessage.WithMedia.Template' }})
    r"""The template to use to create the notification text displayed when a new message with media/file attachments is added to a conversation and `new_message.attachments.enabled` is `true`."""  
    removed_from_conversation_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RemovedFromConversation.Enabled' }})
    r"""Whether to send a notification to a user when they are removed from a conversation. The default is `false`."""  
    removed_from_conversation_sound: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RemovedFromConversation.Sound' }})
    r"""The name of the sound to play to a user when they are removed from a conversation and `removed_from_conversation.enabled` is `true`."""  
    removed_from_conversation_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RemovedFromConversation.Template' }})
    r"""The template to use to create the notification text displayed to a user when they are removed from a conversation and `removed_from_conversation.enabled` is `true`."""  
    

@dataclasses.dataclass
class UpdateServiceNotificationRequest:
    
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    r"""The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Configuration applies to."""  
    request_body: Optional[UpdateServiceNotificationUpdateServiceNotificationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})  
    

@dataclasses.dataclass
class UpdateServiceNotificationResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    conversations_v1_service_service_configuration_service_notification: Optional[shared_conversations_v1_service_service_configuration_service_notification.ConversationsV1ServiceServiceConfigurationServiceNotification] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    