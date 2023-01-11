import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_incoming_phone_number as shared_api_v2010_account_incoming_phone_number


FETCH_INCOMING_PHONE_NUMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchIncomingPhoneNumberPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchIncomingPhoneNumberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchIncomingPhoneNumberRequest:
    path_params: FetchIncomingPhoneNumberPathParams = dataclasses.field()
    security: FetchIncomingPhoneNumberSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchIncomingPhoneNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_incoming_phone_number: Optional[shared_api_v2010_account_incoming_phone_number.APIV2010AccountIncomingPhoneNumber] = dataclasses.field(default=None)
    
