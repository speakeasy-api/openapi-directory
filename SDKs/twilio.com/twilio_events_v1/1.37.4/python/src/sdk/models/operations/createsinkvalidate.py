import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import events_v1_sink_sink_validate as shared_events_v1_sink_sink_validate


CREATE_SINK_VALIDATE_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class CreateSinkValidatePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSinkValidateCreateSinkValidateRequest:
    test_id: str = dataclasses.field(metadata={'form': { 'field_name': 'TestId' }})
    

@dataclasses.dataclass
class CreateSinkValidateSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSinkValidateRequest:
    path_params: CreateSinkValidatePathParams = dataclasses.field()
    security: CreateSinkValidateSecurity = dataclasses.field()
    request: Optional[CreateSinkValidateCreateSinkValidateRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSinkValidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_v1_sink_sink_validate: Optional[shared_events_v1_sink_sink_validate.EventsV1SinkSinkValidate] = dataclasses.field(default=None)
    
