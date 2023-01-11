import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_verification as shared_verify_v2_service_verification


FETCH_VERIFICATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class FetchVerificationPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchVerificationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchVerificationRequest:
    path_params: FetchVerificationPathParams = dataclasses.field()
    security: FetchVerificationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchVerificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_verification: Optional[shared_verify_v2_service_verification.VerifyV2ServiceVerification] = dataclasses.field(default=None)
    
