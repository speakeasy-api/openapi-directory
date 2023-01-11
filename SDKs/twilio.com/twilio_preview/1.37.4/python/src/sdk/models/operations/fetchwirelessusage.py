import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_wireless_sim_usage as shared_preview_wireless_sim_usage


FETCH_WIRELESS_USAGE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchWirelessUsagePathParams:
    sim_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SimSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchWirelessUsageQueryParams:
    end: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'End', 'style': 'form', 'explode': True }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchWirelessUsageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchWirelessUsageRequest:
    path_params: FetchWirelessUsagePathParams = dataclasses.field()
    query_params: FetchWirelessUsageQueryParams = dataclasses.field()
    security: FetchWirelessUsageSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchWirelessUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_wireless_sim_usage: Optional[shared_preview_wireless_sim_usage.PreviewWirelessSimUsage] = dataclasses.field(default=None)
    
