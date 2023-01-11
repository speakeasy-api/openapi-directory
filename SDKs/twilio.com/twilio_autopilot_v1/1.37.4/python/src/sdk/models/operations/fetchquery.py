import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_query as shared_autopilot_v1_assistant_query


FETCH_QUERY_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class FetchQueryPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchQuerySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchQueryRequest:
    path_params: FetchQueryPathParams = dataclasses.field()
    security: FetchQuerySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_query: Optional[shared_autopilot_v1_assistant_query.AutopilotV1AssistantQuery] = dataclasses.field(default=None)
    
