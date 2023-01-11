import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trunking_v1_trunk_phone_number as shared_trunking_v1_trunk_phone_number


CREATE_PHONE_NUMBER_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class CreatePhoneNumberPathParams:
    trunk_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePhoneNumberCreatePhoneNumberRequest:
    phone_number_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'PhoneNumberSid' }})
    

@dataclasses.dataclass
class CreatePhoneNumberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreatePhoneNumberRequest:
    path_params: CreatePhoneNumberPathParams = dataclasses.field()
    security: CreatePhoneNumberSecurity = dataclasses.field()
    request: Optional[CreatePhoneNumberCreatePhoneNumberRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreatePhoneNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trunking_v1_trunk_phone_number: Optional[shared_trunking_v1_trunk_phone_number.TrunkingV1TrunkPhoneNumber] = dataclasses.field(default=None)
    
