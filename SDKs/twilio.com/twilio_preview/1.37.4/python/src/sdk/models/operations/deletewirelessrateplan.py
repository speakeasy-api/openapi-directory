import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_WIRELESS_RATE_PLAN_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class DeleteWirelessRatePlanPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWirelessRatePlanSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteWirelessRatePlanRequest:
    path_params: DeleteWirelessRatePlanPathParams = dataclasses.field()
    security: DeleteWirelessRatePlanSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteWirelessRatePlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
