import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import insights_v1_call as shared_insights_v1_call


FETCH_CALL_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class FetchCallPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCallSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCallRequest:
    path_params: FetchCallPathParams = dataclasses.field()
    security: FetchCallSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insights_v1_call: Optional[shared_insights_v1_call.InsightsV1Call] = dataclasses.field(default=None)
    
