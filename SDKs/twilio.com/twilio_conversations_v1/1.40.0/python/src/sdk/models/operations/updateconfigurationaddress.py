"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import configuration_address_enum_auto_creation_type_enum as shared_configuration_address_enum_auto_creation_type_enum
from ..shared import configuration_address_enum_method_enum as shared_configuration_address_enum_method_enum
from ..shared import conversations_v1_configuration_address as shared_conversations_v1_configuration_address
from typing import Optional

UPDATE_CONFIGURATION_ADDRESS_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateConfigurationAddressSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class UpdateConfigurationAddressUpdateConfigurationAddressRequest:
    
    auto_creation_conversation_service_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.ConversationServiceSid' }})
    r"""Conversation Service for the auto-created conversation. If not set, the conversation is created in the default service."""  
    auto_creation_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.Enabled' }})
    r"""Enable/Disable auto-creating conversations for messages to this address"""  
    auto_creation_studio_flow_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.StudioFlowSid' }})
    r"""For type `studio`, the studio flow SID where the webhook should be sent to."""  
    auto_creation_studio_retry_count: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.StudioRetryCount' }})
    r"""For type `studio`, number of times to retry the webhook request"""  
    auto_creation_type: Optional[shared_configuration_address_enum_auto_creation_type_enum.ConfigurationAddressEnumAutoCreationTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.Type' }})  
    auto_creation_webhook_filters: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.WebhookFilters' }})
    r"""The list of events, firing webhook event for this Conversation. Values can be any of the following: `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationUpdated`, `onConversationStateUpdated`, `onConversationRemoved`, `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved`, `onDeliveryUpdated`"""  
    auto_creation_webhook_method: Optional[shared_configuration_address_enum_method_enum.ConfigurationAddressEnumMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.WebhookMethod' }})  
    auto_creation_webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCreation.WebhookUrl' }})
    r"""For type `webhook`, the url for the webhook request."""  
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    r"""The human-readable name of this configuration, limited to 256 characters. Optional."""  
    

@dataclasses.dataclass
class UpdateConfigurationAddressRequest:
    
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    r"""The SID of the Address Configuration resource. This value can be either the `sid` or the `address` of the configuration"""  
    request_body: Optional[UpdateConfigurationAddressUpdateConfigurationAddressRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})  
    

@dataclasses.dataclass
class UpdateConfigurationAddressResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    conversations_v1_configuration_address: Optional[shared_conversations_v1_configuration_address.ConversationsV1ConfigurationAddress] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    