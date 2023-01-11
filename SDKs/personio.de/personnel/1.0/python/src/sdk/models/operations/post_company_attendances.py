import dataclasses
from typing import Optional
from ..shared import newattendanceperiodrequest as shared_newattendanceperiodrequest
from ..shared import detailederrorresponse as shared_detailederrorresponse
from ..shared import newattendanceperiodresponse as shared_newattendanceperiodresponse


@dataclasses.dataclass
class PostCompanyAttendancesRequest:
    request: shared_newattendanceperiodrequest.NewAttendancePeriodRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompanyAttendancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    detailed_error_response: Optional[shared_detailederrorresponse.DetailedErrorResponse] = dataclasses.field(default=None)
    new_attendance_period_response: Optional[shared_newattendanceperiodresponse.NewAttendancePeriodResponse] = dataclasses.field(default=None)
    
