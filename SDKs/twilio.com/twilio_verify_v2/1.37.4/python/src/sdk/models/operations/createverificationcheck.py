import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_verification_check as shared_verify_v2_service_verification_check


CREATE_VERIFICATION_CHECK_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class CreateVerificationCheckPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateVerificationCheckCreateVerificationCheckRequest:
    amount: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Amount' }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Code' }})
    payee: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Payee' }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'To' }})
    verification_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VerificationSid' }})
    

@dataclasses.dataclass
class CreateVerificationCheckSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateVerificationCheckRequest:
    path_params: CreateVerificationCheckPathParams = dataclasses.field()
    security: CreateVerificationCheckSecurity = dataclasses.field()
    request: Optional[CreateVerificationCheckCreateVerificationCheckRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateVerificationCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_verification_check: Optional[shared_verify_v2_service_verification_check.VerifyV2ServiceVerificationCheck] = dataclasses.field(default=None)
    
