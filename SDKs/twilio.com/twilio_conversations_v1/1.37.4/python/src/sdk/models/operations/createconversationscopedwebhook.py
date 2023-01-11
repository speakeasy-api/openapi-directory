import dataclasses
from typing import Optional
from enum import Enum
from ..shared import conversation_scoped_webhook_enum_method_enum as shared_conversation_scoped_webhook_enum_method_enum
from ..shared import conversation_scoped_webhook_enum_target_enum as shared_conversation_scoped_webhook_enum_target_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_conversation_conversation_scoped_webhook as shared_conversations_v1_conversation_conversation_scoped_webhook


CREATE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class CreateConversationScopedWebhookPathParams:
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateConversationScopedWebhookCreateConversationScopedWebhookRequest:
    target: shared_conversation_scoped_webhook_enum_target_enum.ConversationScopedWebhookEnumTargetEnum = dataclasses.field(metadata={'form': { 'field_name': 'Target' }})
    configuration_filters: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.Filters' }})
    configuration_flow_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.FlowSid' }})
    configuration_method: Optional[shared_conversation_scoped_webhook_enum_method_enum.ConversationScopedWebhookEnumMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.Method' }})
    configuration_replay_after: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.ReplayAfter' }})
    configuration_triggers: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.Triggers' }})
    configuration_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.Url' }})
    

@dataclasses.dataclass
class CreateConversationScopedWebhookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateConversationScopedWebhookRequest:
    path_params: CreateConversationScopedWebhookPathParams = dataclasses.field()
    security: CreateConversationScopedWebhookSecurity = dataclasses.field()
    request: Optional[CreateConversationScopedWebhookCreateConversationScopedWebhookRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateConversationScopedWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_conversation_conversation_scoped_webhook: Optional[shared_conversations_v1_conversation_conversation_scoped_webhook.ConversationsV1ConversationConversationScopedWebhook] = dataclasses.field(default=None)
    
