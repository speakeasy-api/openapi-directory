import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import monitor_v1_event as shared_monitor_v1_event


FETCH_EVENT_SERVERS = [
	"https://monitor.twilio.com",
]


@dataclasses.dataclass
class FetchEventPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchEventSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchEventRequest:
    path_params: FetchEventPathParams = dataclasses.field()
    security: FetchEventSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    monitor_v1_event: Optional[shared_monitor_v1_event.MonitorV1Event] = dataclasses.field(default=None)
    
