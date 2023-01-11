import dataclasses
from typing import Optional
from ..shared import reportfilter as shared_reportfilter
from ..shared import error as shared_error
from ..shared import usersreport as shared_usersreport


@dataclasses.dataclass
class GetUsersReportRequest:
    request: Optional[shared_reportfilter.ReportFilter] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetUsersReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    users_report: Optional[shared_usersreport.UsersReport] = dataclasses.field(default=None)
    
