import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_configuration_configuration_webhook as shared_conversations_v1_configuration_configuration_webhook


FETCH_CONFIGURATION_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchConfigurationWebhookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConfigurationWebhookRequest:
    security: FetchConfigurationWebhookSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConfigurationWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_configuration_configuration_webhook: Optional[shared_conversations_v1_configuration_configuration_webhook.ConversationsV1ConfigurationConfigurationWebhook] = dataclasses.field(default=None)
    
