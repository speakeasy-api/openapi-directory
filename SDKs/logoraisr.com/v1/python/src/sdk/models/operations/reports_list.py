import dataclasses
from typing import Optional
from ..shared import report as shared_report


@dataclasses.dataclass
class ReportsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    report: Optional[shared_report.Report] = dataclasses.field(default=None)
    
