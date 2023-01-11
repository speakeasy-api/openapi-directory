import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_CONFIGURATION_ADDRESS_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class DeleteConfigurationAddressPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteConfigurationAddressSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteConfigurationAddressRequest:
    path_params: DeleteConfigurationAddressPathParams = dataclasses.field()
    security: DeleteConfigurationAddressSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteConfigurationAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
