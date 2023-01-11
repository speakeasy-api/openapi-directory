import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AttendancePeriodsResponseDataAttributes:
    break_: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('break') }})
    comment: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    date_: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    employee: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee') }})
    end_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    is_holiday: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_holiday') }})
    is_on_time_off: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_on_time_off') }})
    start_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    

@dataclass_json
@dataclasses.dataclass
class AttendancePeriodsResponseData:
    attributes: list[AttendancePeriodsResponseDataAttributes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AttendancePeriodsResponse:
    data: list[AttendancePeriodsResponseData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    
