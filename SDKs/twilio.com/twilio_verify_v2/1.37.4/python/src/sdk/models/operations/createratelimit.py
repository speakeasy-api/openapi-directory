import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_rate_limit as shared_verify_v2_service_rate_limit


CREATE_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class CreateRateLimitPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateRateLimitCreateRateLimitRequest:
    unique_name: str = dataclasses.field(metadata={'form': { 'field_name': 'UniqueName' }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Description' }})
    

@dataclasses.dataclass
class CreateRateLimitSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateRateLimitRequest:
    path_params: CreateRateLimitPathParams = dataclasses.field()
    security: CreateRateLimitSecurity = dataclasses.field()
    request: Optional[CreateRateLimitCreateRateLimitRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateRateLimitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_rate_limit: Optional[shared_verify_v2_service_rate_limit.VerifyV2ServiceRateLimit] = dataclasses.field(default=None)
    
