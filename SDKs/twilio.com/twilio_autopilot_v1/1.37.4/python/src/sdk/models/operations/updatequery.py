import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_query as shared_autopilot_v1_assistant_query


UPDATE_QUERY_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class UpdateQueryPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateQueryUpdateQueryRequest:
    sample_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SampleSid' }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdateQuerySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateQueryRequest:
    path_params: UpdateQueryPathParams = dataclasses.field()
    security: UpdateQuerySecurity = dataclasses.field()
    request: Optional[UpdateQueryUpdateQueryRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_query: Optional[shared_autopilot_v1_assistant_query.AutopilotV1AssistantQuery] = dataclasses.field(default=None)
    
