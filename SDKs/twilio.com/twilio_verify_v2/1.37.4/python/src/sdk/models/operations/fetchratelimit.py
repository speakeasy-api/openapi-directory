import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_rate_limit as shared_verify_v2_service_rate_limit


FETCH_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class FetchRateLimitPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRateLimitSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRateLimitRequest:
    path_params: FetchRateLimitPathParams = dataclasses.field()
    security: FetchRateLimitSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRateLimitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_rate_limit: Optional[shared_verify_v2_service_rate_limit.VerifyV2ServiceRateLimit] = dataclasses.field(default=None)
    
