import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_RATE_LIMIT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class DeleteRateLimitPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRateLimitSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteRateLimitRequest:
    path_params: DeleteRateLimitPathParams = dataclasses.field()
    security: DeleteRateLimitSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteRateLimitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
