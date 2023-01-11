import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_rate_limit as shared_verify_v2_service_rate_limit


UPDATE_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class UpdateRateLimitPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRateLimitUpdateRateLimitRequest:
    description: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Description' }})
    

@dataclasses.dataclass
class UpdateRateLimitSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateRateLimitRequest:
    path_params: UpdateRateLimitPathParams = dataclasses.field()
    security: UpdateRateLimitSecurity = dataclasses.field()
    request: Optional[UpdateRateLimitUpdateRateLimitRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateRateLimitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_rate_limit: Optional[shared_verify_v2_service_rate_limit.VerifyV2ServiceRateLimit] = dataclasses.field(default=None)
    
