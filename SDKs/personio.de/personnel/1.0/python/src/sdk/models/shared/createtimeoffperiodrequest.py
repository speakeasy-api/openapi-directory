import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateTimeOffPeriodRequest:
    employee_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_id') }})
    end_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    half_day_end: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('half_day_end') }})
    half_day_start: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('half_day_start') }})
    start_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_off_type_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_off_type_id') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    
