import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import service_conversation_scoped_webhook_enum_method_enum as shared_service_conversation_scoped_webhook_enum_method_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_conversation_service_conversation_scoped_webhook as shared_conversations_v1_service_service_conversation_service_conversation_scoped_webhook


UPDATE_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateServiceConversationScopedWebhookPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest:
    configuration_filters: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.Filters' }})
    configuration_flow_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.FlowSid' }})
    configuration_method: Optional[shared_service_conversation_scoped_webhook_enum_method_enum.ServiceConversationScopedWebhookEnumMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.Method' }})
    configuration_triggers: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.Triggers' }})
    configuration_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.Url' }})
    

@dataclasses.dataclass
class UpdateServiceConversationScopedWebhookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceConversationScopedWebhookRequest:
    path_params: UpdateServiceConversationScopedWebhookPathParams = dataclasses.field()
    security: UpdateServiceConversationScopedWebhookSecurity = dataclasses.field()
    request: Optional[UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceConversationScopedWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_conversation_service_conversation_scoped_webhook: Optional[shared_conversations_v1_service_service_conversation_service_conversation_scoped_webhook.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook] = dataclasses.field(default=None)
    
