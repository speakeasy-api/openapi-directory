import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import absenceentitlement as shared_absenceentitlement
from ..shared import attribute as shared_attribute
from ..shared import costcenters as shared_costcenters
from ..shared import department as shared_department
from ..shared import holidaycalendar as shared_holidaycalendar
from ..shared import office as shared_office
from ..shared import supervisor as shared_supervisor
from ..shared import workschedule as shared_workschedule


@dataclass_json
@dataclasses.dataclass
class EmployeeResponseDataAttributes:
    absence_entitlement: Optional[shared_absenceentitlement.AbsenceEntitlement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absence_entitlement') }})
    contract_end_date: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contract_end_date') }})
    cost_centers: Optional[shared_costcenters.CostCenters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost_centers') }})
    created_at: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    department: Optional[shared_department.Department] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }})
    email: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    employment_type: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_type') }})
    first_name: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    fix_salary: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fix_salary') }})
    gender: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    hire_date: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hire_date') }})
    holiday_calendar: Optional[shared_holidaycalendar.HolidayCalendar] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holiday_calendar') }})
    hourly_salary: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourly_salary') }})
    id: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    office: Optional[shared_office.Office] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('office') }})
    position: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    probation_period_end: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probation_period_end') }})
    status: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    supervisor: Optional[shared_supervisor.Supervisor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supervisor') }})
    termination_date: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_date') }})
    termination_reason: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_reason') }})
    termination_type: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_type') }})
    vacation_day_balance: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vacation_day_balance') }})
    weekly_working_hours: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_working_hours') }})
    work_schedule: Optional[shared_workschedule.WorkSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('work_schedule') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployeeResponseData:
    attributes: list[EmployeeResponseDataAttributes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployeeResponse:
    data: EmployeeResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
