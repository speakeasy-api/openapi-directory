import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_defaults as shared_autopilot_v1_assistant_defaults


UPDATE_DEFAULTS_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class UpdateDefaultsPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDefaultsUpdateDefaultsRequest:
    defaults: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Defaults' }})
    

@dataclasses.dataclass
class UpdateDefaultsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateDefaultsRequest:
    path_params: UpdateDefaultsPathParams = dataclasses.field()
    security: UpdateDefaultsSecurity = dataclasses.field()
    request: Optional[UpdateDefaultsUpdateDefaultsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateDefaultsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_defaults: Optional[shared_autopilot_v1_assistant_defaults.AutopilotV1AssistantDefaults] = dataclasses.field(default=None)
    
