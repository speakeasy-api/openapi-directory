import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import events_v1_sink as shared_events_v1_sink


UPDATE_SINK_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class UpdateSinkPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSinkUpdateSinkRequest:
    description: str = dataclasses.field(metadata={'form': { 'field_name': 'Description' }})
    

@dataclasses.dataclass
class UpdateSinkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSinkRequest:
    path_params: UpdateSinkPathParams = dataclasses.field()
    security: UpdateSinkSecurity = dataclasses.field()
    request: Optional[UpdateSinkUpdateSinkRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_v1_sink: Optional[shared_events_v1_sink.EventsV1Sink] = dataclasses.field(default=None)
    
