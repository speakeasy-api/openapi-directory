import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import sink_enum_sink_type_enum as shared_sink_enum_sink_type_enum
from ..shared import security as shared_security
from ..shared import events_v1_sink as shared_events_v1_sink


CREATE_SINK_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class CreateSinkCreateSinkRequest:
    description: str = dataclasses.field(metadata={'form': { 'field_name': 'Description' }})
    sink_configuration: Any = dataclasses.field(metadata={'form': { 'field_name': 'SinkConfiguration' }})
    sink_type: shared_sink_enum_sink_type_enum.SinkEnumSinkTypeEnum = dataclasses.field(metadata={'form': { 'field_name': 'SinkType' }})
    

@dataclasses.dataclass
class CreateSinkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSinkRequest:
    security: CreateSinkSecurity = dataclasses.field()
    request: Optional[CreateSinkCreateSinkRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_v1_sink: Optional[shared_events_v1_sink.EventsV1Sink] = dataclasses.field(default=None)
    
