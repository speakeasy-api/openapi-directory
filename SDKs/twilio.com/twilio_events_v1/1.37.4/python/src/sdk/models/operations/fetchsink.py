import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import events_v1_sink as shared_events_v1_sink


FETCH_SINK_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class FetchSinkPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSinkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSinkRequest:
    path_params: FetchSinkPathParams = dataclasses.field()
    security: FetchSinkSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_v1_sink: Optional[shared_events_v1_sink.EventsV1Sink] = dataclasses.field(default=None)
    
