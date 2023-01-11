import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import monitor_v1_alert_instance as shared_monitor_v1_alert_instance


FETCH_ALERT_SERVERS = [
	"https://monitor.twilio.com",
]


@dataclasses.dataclass
class FetchAlertPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchAlertSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchAlertRequest:
    path_params: FetchAlertPathParams = dataclasses.field()
    security: FetchAlertSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchAlertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    monitor_v1_alert_instance: Optional[shared_monitor_v1_alert_instance.MonitorV1AlertInstance] = dataclasses.field(default=None)
    
