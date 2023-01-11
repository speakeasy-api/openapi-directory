import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NewAttendancePeriodRequestAttendances:
    break_: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('break') }})
    comment: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    date_: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    employee: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee') }})
    end_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    start_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    

@dataclass_json
@dataclasses.dataclass
class NewAttendancePeriodRequest:
    attendances: Optional[list[NewAttendancePeriodRequestAttendances]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendances') }})
    
