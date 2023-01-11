import dataclasses
from typing import Optional
from ..shared import reportfilter as shared_reportfilter
from ..shared import error as shared_error
from ..shared import projectlist as shared_projectlist


@dataclasses.dataclass
class GetProjectsReportRequest:
    request: Optional[shared_reportfilter.ReportFilter] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetProjectsReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    project_list: Optional[shared_projectlist.ProjectList] = dataclasses.field(default=None)
    
