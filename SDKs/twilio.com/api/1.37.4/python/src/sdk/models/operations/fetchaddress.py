import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_address as shared_api_v2010_account_address


FETCH_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchAddressPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchAddressSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchAddressRequest:
    path_params: FetchAddressPathParams = dataclasses.field()
    security: FetchAddressSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_address: Optional[shared_api_v2010_account_address.APIV2010AccountAddress] = dataclasses.field(default=None)
    
