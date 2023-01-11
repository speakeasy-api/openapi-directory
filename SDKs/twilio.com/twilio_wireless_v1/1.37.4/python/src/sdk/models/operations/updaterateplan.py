import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import wireless_v1_rate_plan as shared_wireless_v1_rate_plan


UPDATE_RATE_PLAN_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclasses.dataclass
class UpdateRatePlanPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRatePlanUpdateRatePlanRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class UpdateRatePlanSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateRatePlanRequest:
    path_params: UpdateRatePlanPathParams = dataclasses.field()
    security: UpdateRatePlanSecurity = dataclasses.field()
    request: Optional[UpdateRatePlanUpdateRatePlanRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateRatePlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    wireless_v1_rate_plan: Optional[shared_wireless_v1_rate_plan.WirelessV1RatePlan] = dataclasses.field(default=None)
    
