from dataclasses import dataclass, field
from typing import Optional
DELETE_PHONE_NUMBER_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class DeletePhoneNumberPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeletePhoneNumberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeletePhoneNumberPathParams = field(default=None)
    security: DeletePhoneNumberSecurity = field(default=None)
    

@dataclass
class DeletePhoneNumberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
