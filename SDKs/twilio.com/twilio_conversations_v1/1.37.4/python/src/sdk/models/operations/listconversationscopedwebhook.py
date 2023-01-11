import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import conversations_v1_conversation_conversation_scoped_webhook as shared_conversations_v1_conversation_conversation_scoped_webhook


LIST_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class ListConversationScopedWebhookPathParams:
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListConversationScopedWebhookQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListConversationScopedWebhookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListConversationScopedWebhookListConversationScopedWebhookResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListConversationScopedWebhookListConversationScopedWebhookResponse:
    meta: Optional[ListConversationScopedWebhookListConversationScopedWebhookResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    webhooks: Optional[list[shared_conversations_v1_conversation_conversation_scoped_webhook.ConversationsV1ConversationConversationScopedWebhook]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    

@dataclasses.dataclass
class ListConversationScopedWebhookRequest:
    path_params: ListConversationScopedWebhookPathParams = dataclasses.field()
    query_params: ListConversationScopedWebhookQueryParams = dataclasses.field()
    security: ListConversationScopedWebhookSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListConversationScopedWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_conversation_scoped_webhook_response: Optional[ListConversationScopedWebhookListConversationScopedWebhookResponse] = dataclasses.field(default=None)
    
