import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_safelist as shared_verify_v2_safelist


FETCH_SAFELIST_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class FetchSafelistPathParams:
    phone_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSafelistSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSafelistRequest:
    path_params: FetchSafelistPathParams = dataclasses.field()
    security: FetchSafelistSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSafelistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_safelist: Optional[shared_verify_v2_safelist.VerifyV2Safelist] = dataclasses.field(default=None)
    
