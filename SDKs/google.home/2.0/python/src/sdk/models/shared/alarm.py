import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datepattern as shared_datepattern
from ..shared import timepattern as shared_timepattern


@dataclass_json
@dataclasses.dataclass
class Alarm:
    date_pattern: shared_datepattern.DatePattern = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_pattern') }})
    fire_time: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fire_time') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    time_pattern: shared_timepattern.TimePattern = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_pattern') }})
    
