import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import attendanceperiodsresponse as shared_attendanceperiodsresponse


@dataclasses.dataclass
class GetCompanyAttendancesQueryParams:
    end_date: date = dataclasses.field(metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    start_date: date = dataclasses.field(metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    employees: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'employees', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    updated_from: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updated_from', 'style': 'form', 'explode': True }})
    updated_to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updated_to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompanyAttendancesRequest:
    query_params: GetCompanyAttendancesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCompanyAttendancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    attendance_periods_response: Optional[shared_attendanceperiodsresponse.AttendancePeriodsResponse] = dataclasses.field(default=None)
    
