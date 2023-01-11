import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import events_v1_sink_sink_test as shared_events_v1_sink_sink_test


CREATE_SINK_TEST_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class CreateSinkTestPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSinkTestSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSinkTestRequest:
    path_params: CreateSinkTestPathParams = dataclasses.field()
    security: CreateSinkTestSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSinkTestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_v1_sink_sink_test: Optional[shared_events_v1_sink_sink_test.EventsV1SinkSinkTest] = dataclasses.field(default=None)
    
