import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_configuration_service_webhook_configuration as shared_conversations_v1_service_service_configuration_service_webhook_configuration


FETCH_SERVICE_WEBHOOK_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchServiceWebhookConfigurationPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchServiceWebhookConfigurationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchServiceWebhookConfigurationRequest:
    path_params: FetchServiceWebhookConfigurationPathParams = dataclasses.field()
    security: FetchServiceWebhookConfigurationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchServiceWebhookConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_configuration_service_webhook_configuration: Optional[shared_conversations_v1_service_service_configuration_service_webhook_configuration.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration] = dataclasses.field(default=None)
    
