import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_defaults as shared_autopilot_v1_assistant_defaults


FETCH_DEFAULTS_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class FetchDefaultsPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDefaultsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDefaultsRequest:
    path_params: FetchDefaultsPathParams = dataclasses.field()
    security: FetchDefaultsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDefaultsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_defaults: Optional[shared_autopilot_v1_assistant_defaults.AutopilotV1AssistantDefaults] = dataclasses.field(default=None)
    
