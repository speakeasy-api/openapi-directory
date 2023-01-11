import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import proxy_v1_service_phone_number as shared_proxy_v1_service_phone_number


CREATE_PHONE_NUMBER_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class CreatePhoneNumberPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePhoneNumberCreatePhoneNumberRequest:
    is_reserved: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IsReserved' }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PhoneNumber' }})
    sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Sid' }})
    

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
    proxy_v1_service_phone_number: Optional[shared_proxy_v1_service_phone_number.ProxyV1ServicePhoneNumber] = dataclasses.field(default=None)
    
