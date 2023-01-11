import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetglobaltimeQueryParams:
    license: str = dataclasses.field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    locale: str = dataclasses.field(metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Getglobaltime200ApplicationJSON:
    clock_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClockTime') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    current_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentDate') }})
    current_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentTime') }})
    day: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Day') }})
    hour: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hour') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Locale') }})
    minute: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Minute') }})
    month: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Month') }})
    month_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonthNumber') }})
    second: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Second') }})
    time_stamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeStamp') }})
    weekday: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Weekday') }})
    year: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Year') }})
    zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zone') }})
    

@dataclasses.dataclass
class GetglobaltimeRequest:
    query_params: GetglobaltimeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetglobaltimeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getglobaltime_200_application_json_object: Optional[Getglobaltime200ApplicationJSON] = dataclasses.field(default=None)
    
