import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_conversation_conversation_scoped_webhook as shared_conversations_v1_conversation_conversation_scoped_webhook


FETCH_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchConversationScopedWebhookPathParams:
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchConversationScopedWebhookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConversationScopedWebhookRequest:
    path_params: FetchConversationScopedWebhookPathParams = dataclasses.field()
    security: FetchConversationScopedWebhookSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConversationScopedWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_conversation_conversation_scoped_webhook: Optional[shared_conversations_v1_conversation_conversation_scoped_webhook.ConversationsV1ConversationConversationScopedWebhook] = dataclasses.field(default=None)
    
