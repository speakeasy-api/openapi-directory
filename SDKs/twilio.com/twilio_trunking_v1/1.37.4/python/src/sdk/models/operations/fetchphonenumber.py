import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trunking_v1_trunk_phone_number as shared_trunking_v1_trunk_phone_number


FETCH_PHONE_NUMBER_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class FetchPhoneNumberPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

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
    trunking_v1_trunk_phone_number: Optional[shared_trunking_v1_trunk_phone_number.TrunkingV1TrunkPhoneNumber] = dataclasses.field(default=None)
    
