import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_conversation_service_conversation_scoped_webhook as shared_conversations_v1_service_service_conversation_service_conversation_scoped_webhook


LIST_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class ListServiceConversationScopedWebhookPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListServiceConversationScopedWebhookQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListServiceConversationScopedWebhookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse:
    meta: Optional[ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    webhooks: Optional[list[shared_conversations_v1_service_service_conversation_service_conversation_scoped_webhook.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    

@dataclasses.dataclass
class ListServiceConversationScopedWebhookRequest:
    path_params: ListServiceConversationScopedWebhookPathParams = dataclasses.field()
    query_params: ListServiceConversationScopedWebhookQueryParams = dataclasses.field()
    security: ListServiceConversationScopedWebhookSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListServiceConversationScopedWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_service_conversation_scoped_webhook_response: Optional[ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse] = dataclasses.field(default=None)
    
