import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_verification_attempt as shared_verify_v2_verification_attempt


FETCH_VERIFICATION_ATTEMPT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class FetchVerificationAttemptPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchVerificationAttemptSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchVerificationAttemptRequest:
    path_params: FetchVerificationAttemptPathParams = dataclasses.field()
    security: FetchVerificationAttemptSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchVerificationAttemptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_verification_attempt: Optional[shared_verify_v2_verification_attempt.VerifyV2VerificationAttempt] = dataclasses.field(default=None)
    
