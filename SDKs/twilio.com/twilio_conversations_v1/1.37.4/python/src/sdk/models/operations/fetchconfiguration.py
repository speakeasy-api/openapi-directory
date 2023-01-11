import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_configuration as shared_conversations_v1_configuration


FETCH_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchConfigurationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConfigurationRequest:
    security: FetchConfigurationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_configuration: Optional[shared_conversations_v1_configuration.ConversationsV1Configuration] = dataclasses.field(default=None)
    
