import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import routes_v2_phone_number as shared_routes_v2_phone_number


FETCH_PHONE_NUMBER_SERVERS = [
	"https://routes.twilio.com",
]


@dataclasses.dataclass
class FetchPhoneNumberPathParams:
    phone_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchPhoneNumberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchPhoneNumberRequest:
    path_params: FetchPhoneNumberPathParams = dataclasses.field()
    security: FetchPhoneNumberSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchPhoneNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    routes_v2_phone_number: Optional[shared_routes_v2_phone_number.RoutesV2PhoneNumber] = dataclasses.field(default=None)
    
