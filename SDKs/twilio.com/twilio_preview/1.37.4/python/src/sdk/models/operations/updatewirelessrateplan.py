import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_wireless_rate_plan as shared_preview_wireless_rate_plan


UPDATE_WIRELESS_RATE_PLAN_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateWirelessRatePlanPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateWirelessRatePlanUpdateWirelessRatePlanRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class UpdateWirelessRatePlanSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateWirelessRatePlanRequest:
    path_params: UpdateWirelessRatePlanPathParams = dataclasses.field()
    security: UpdateWirelessRatePlanSecurity = dataclasses.field()
    request: Optional[UpdateWirelessRatePlanUpdateWirelessRatePlanRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateWirelessRatePlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_wireless_rate_plan: Optional[shared_preview_wireless_rate_plan.PreviewWirelessRatePlan] = dataclasses.field(default=None)
    
