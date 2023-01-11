import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_RATE_PLAN_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclasses.dataclass
class DeleteRatePlanPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRatePlanSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteRatePlanRequest:
    path_params: DeleteRatePlanPathParams = dataclasses.field()
    security: DeleteRatePlanSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteRatePlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
