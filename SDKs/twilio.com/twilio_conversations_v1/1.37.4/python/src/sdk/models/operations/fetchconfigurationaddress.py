import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_configuration_address as shared_conversations_v1_configuration_address


FETCH_CONFIGURATION_ADDRESS_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchConfigurationAddressPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchConfigurationAddressSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConfigurationAddressRequest:
    path_params: FetchConfigurationAddressPathParams = dataclasses.field()
    security: FetchConfigurationAddressSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConfigurationAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_configuration_address: Optional[shared_conversations_v1_configuration_address.ConversationsV1ConfigurationAddress] = dataclasses.field(default=None)
    
