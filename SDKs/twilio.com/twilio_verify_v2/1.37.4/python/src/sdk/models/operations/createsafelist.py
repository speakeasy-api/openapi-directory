import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_safelist as shared_verify_v2_safelist


CREATE_SAFELIST_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class CreateSafelistCreateSafelistRequest:
    phone_number: str = dataclasses.field(metadata={'form': { 'field_name': 'PhoneNumber' }})
    

@dataclasses.dataclass
class CreateSafelistSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSafelistRequest:
    security: CreateSafelistSecurity = dataclasses.field()
    request: Optional[CreateSafelistCreateSafelistRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSafelistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_safelist: Optional[shared_verify_v2_safelist.VerifyV2Safelist] = dataclasses.field(default=None)
    
