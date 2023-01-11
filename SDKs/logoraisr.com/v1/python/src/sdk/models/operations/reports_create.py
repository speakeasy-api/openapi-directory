import dataclasses
from typing import Optional
from ..shared import reportrequest as shared_reportrequest
from ..shared import reportresponse as shared_reportresponse


@dataclasses.dataclass
class ReportsCreateRequest:
    request: shared_reportrequest.ReportRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReportsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    report_response: Optional[shared_reportresponse.ReportResponse] = dataclasses.field(default=None)
    
