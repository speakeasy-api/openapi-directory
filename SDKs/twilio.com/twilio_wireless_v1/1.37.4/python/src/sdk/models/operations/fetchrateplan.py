import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import wireless_v1_rate_plan as shared_wireless_v1_rate_plan


FETCH_RATE_PLAN_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclasses.dataclass
class FetchRatePlanPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRatePlanSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRatePlanRequest:
    path_params: FetchRatePlanPathParams = dataclasses.field()
    security: FetchRatePlanSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRatePlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    wireless_v1_rate_plan: Optional[shared_wireless_v1_rate_plan.WirelessV1RatePlan] = dataclasses.field(default=None)
    
