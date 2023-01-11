import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_wireless_rate_plan as shared_preview_wireless_rate_plan


FETCH_WIRELESS_RATE_PLAN_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchWirelessRatePlanPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchWirelessRatePlanSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchWirelessRatePlanRequest:
    path_params: FetchWirelessRatePlanPathParams = dataclasses.field()
    security: FetchWirelessRatePlanSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchWirelessRatePlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_wireless_rate_plan: Optional[shared_preview_wireless_rate_plan.PreviewWirelessRatePlan] = dataclasses.field(default=None)
    
