import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_configuration as shared_conversations_v1_service_service_configuration


FETCH_SERVICE_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchServiceConfigurationPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchServiceConfigurationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchServiceConfigurationRequest:
    path_params: FetchServiceConfigurationPathParams = dataclasses.field()
    security: FetchServiceConfigurationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchServiceConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_configuration: Optional[shared_conversations_v1_service_service_configuration.ConversationsV1ServiceServiceConfiguration] = dataclasses.field(default=None)
    
