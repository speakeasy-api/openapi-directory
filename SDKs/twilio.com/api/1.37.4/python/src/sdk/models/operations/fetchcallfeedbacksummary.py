import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_call_call_feedback_summary as shared_api_v2010_account_call_call_feedback_summary


FETCH_CALL_FEEDBACK_SUMMARY_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchCallFeedbackSummaryPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCallFeedbackSummarySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCallFeedbackSummaryRequest:
    path_params: FetchCallFeedbackSummaryPathParams = dataclasses.field()
    security: FetchCallFeedbackSummarySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCallFeedbackSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call_call_feedback_summary: Optional[shared_api_v2010_account_call_call_feedback_summary.APIV2010AccountCallCallFeedbackSummary] = dataclasses.field(default=None)
    
