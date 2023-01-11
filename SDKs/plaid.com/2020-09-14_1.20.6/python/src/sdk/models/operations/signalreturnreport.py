import dataclasses
from typing import Any,Optional
from ..shared import signalreturnreportrequest as shared_signalreturnreportrequest
from ..shared import signalreturnreportresponse as shared_signalreturnreportresponse


@dataclasses.dataclass
class SignalReturnReportRequest:
    request: shared_signalreturnreportrequest.SignalReturnReportRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SignalReturnReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    signal_return_report_response: Optional[shared_signalreturnreportresponse.SignalReturnReportResponse] = dataclasses.field(default=None)
    
