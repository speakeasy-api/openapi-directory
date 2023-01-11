import dataclasses
from typing import Optional
from enum import Enum
from ..shared import summary_enum_processing_state_enum as shared_summary_enum_processing_state_enum
from ..shared import security as shared_security
from ..shared import insights_v1_call_summary as shared_insights_v1_call_summary


FETCH_SUMMARY_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class FetchSummaryPathParams:
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSummaryQueryParams:
    processing_state: Optional[shared_summary_enum_processing_state_enum.SummaryEnumProcessingStateEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ProcessingState', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchSummarySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSummaryRequest:
    path_params: FetchSummaryPathParams = dataclasses.field()
    query_params: FetchSummaryQueryParams = dataclasses.field()
    security: FetchSummarySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insights_v1_call_summary: Optional[shared_insights_v1_call_summary.InsightsV1CallSummary] = dataclasses.field(default=None)
    
