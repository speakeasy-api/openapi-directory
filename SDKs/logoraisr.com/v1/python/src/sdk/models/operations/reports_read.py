import dataclasses
from typing import Optional
from ..shared import report as shared_report


@dataclasses.dataclass
class ReportsReadPathParams:
    report_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'report_number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReportsReadRequest:
    path_params: ReportsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReportsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    report: Optional[shared_report.Report] = dataclasses.field(default=None)
    
