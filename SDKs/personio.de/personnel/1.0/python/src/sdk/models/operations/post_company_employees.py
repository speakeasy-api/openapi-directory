import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import response as shared_response

class PostCompanyEmployeesRequestBodyEmployeeGenderEnum(str, Enum):
    MALE = "male"
    FEMALE = "female"
    DIVERSE = "diverse"


@dataclasses.dataclass
class PostCompanyEmployeesRequestBody:
    employee_email_: str = dataclasses.field(metadata={'form': { 'field_name': 'employee[email]' }})
    employee_first_name_: str = dataclasses.field(metadata={'form': { 'field_name': 'employee[first_name]' }})
    employee_last_name_: str = dataclasses.field(metadata={'form': { 'field_name': 'employee[last_name]' }})
    employee_department_: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'employee[department]' }})
    employee_gender_: Optional[PostCompanyEmployeesRequestBodyEmployeeGenderEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'employee[gender]' }})
    employee_hire_date_: Optional[date] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'employee[hire_date]' }})
    employee_position_: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'employee[position]' }})
    employee_weekly_hours_: Optional[float] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'employee[weekly_hours]' }})
    

@dataclasses.dataclass
class PostCompanyEmployeesRequest:
    request: PostCompanyEmployeesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PostCompanyEmployeesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response: Optional[shared_response.Response] = dataclasses.field(default=None)
    
