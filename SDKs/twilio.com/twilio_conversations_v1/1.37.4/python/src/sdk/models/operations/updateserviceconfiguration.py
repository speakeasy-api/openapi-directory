import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_configuration as shared_conversations_v1_service_service_configuration


UPDATE_SERVICE_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateServiceConfigurationPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceConfigurationUpdateServiceConfigurationRequest:
    default_chat_service_role_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultChatServiceRoleSid' }})
    default_conversation_creator_role_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultConversationCreatorRoleSid' }})
    default_conversation_role_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultConversationRoleSid' }})
    reachability_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReachabilityEnabled' }})
    

@dataclasses.dataclass
class UpdateServiceConfigurationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceConfigurationRequest:
    path_params: UpdateServiceConfigurationPathParams = dataclasses.field()
    security: UpdateServiceConfigurationSecurity = dataclasses.field()
    request: Optional[UpdateServiceConfigurationUpdateServiceConfigurationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_configuration: Optional[shared_conversations_v1_service_service_configuration.ConversationsV1ServiceServiceConfiguration] = dataclasses.field(default=None)
    
