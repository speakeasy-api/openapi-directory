import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chronology as shared_chronology
from ..shared import datetimefieldtype as shared_datetimefieldtype
from ..shared import datetimefield as shared_datetimefield


@dataclass_json
@dataclasses.dataclass
class LocalTime:
    chronology: Optional[shared_chronology.Chronology] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chronology') }})
    field_types: Optional[list[shared_datetimefieldtype.DateTimeFieldType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldTypes') }})
    fields: Optional[list[shared_datetimefield.DateTimeField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    hour_of_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourOfDay') }})
    millis_of_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('millisOfDay') }})
    millis_of_second: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('millisOfSecond') }})
    minute_of_hour: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minuteOfHour') }})
    second_of_minute: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondOfMinute') }})
    values: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
