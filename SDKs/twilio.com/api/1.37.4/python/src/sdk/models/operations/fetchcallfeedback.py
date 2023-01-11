import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_call_call_feedback as shared_api_v2010_account_call_call_feedback


FETCH_CALL_FEEDBACK_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchCallFeedbackPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCallFeedbackSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCallFeedbackRequest:
    path_params: FetchCallFeedbackPathParams = dataclasses.field()
    security: FetchCallFeedbackSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCallFeedbackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call_call_feedback: Optional[shared_api_v2010_account_call_call_feedback.APIV2010AccountCallCallFeedback] = dataclasses.field(default=None)
    
