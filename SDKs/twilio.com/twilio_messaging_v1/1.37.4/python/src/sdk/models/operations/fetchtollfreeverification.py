import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_tollfree_verification as shared_messaging_v1_tollfree_verification


FETCH_TOLLFREE_VERIFICATION_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class FetchTollfreeVerificationPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTollfreeVerificationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTollfreeVerificationRequest:
    path_params: FetchTollfreeVerificationPathParams = dataclasses.field()
    security: FetchTollfreeVerificationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTollfreeVerificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_tollfree_verification: Optional[shared_messaging_v1_tollfree_verification.MessagingV1TollfreeVerification] = dataclasses.field(default=None)
    
