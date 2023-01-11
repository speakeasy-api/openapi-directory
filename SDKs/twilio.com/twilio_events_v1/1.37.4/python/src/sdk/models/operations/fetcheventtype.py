import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import events_v1_event_type as shared_events_v1_event_type


FETCH_EVENT_TYPE_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class FetchEventTypePathParams:
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchEventTypeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchEventTypeRequest:
    path_params: FetchEventTypePathParams = dataclasses.field()
    security: FetchEventTypeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchEventTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_v1_event_type: Optional[shared_events_v1_event_type.EventsV1EventType] = dataclasses.field(default=None)
    
