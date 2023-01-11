import dataclasses
from typing import Any,Optional
from ..shared import signaldecisionreportrequest as shared_signaldecisionreportrequest
from ..shared import signaldecisionreportresponse as shared_signaldecisionreportresponse


@dataclasses.dataclass
class SignalDecisionReportRequest:
    request: shared_signaldecisionreportrequest.SignalDecisionReportRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SignalDecisionReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    signal_decision_report_response: Optional[shared_signaldecisionreportresponse.SignalDecisionReportResponse] = dataclasses.field(default=None)
    
