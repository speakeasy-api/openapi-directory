import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import durationfield as shared_durationfield
from ..shared import datetimefieldtype as shared_datetimefieldtype


@dataclass_json
@dataclasses.dataclass
class DateTimeField:
    duration_field: Optional[shared_durationfield.DurationField] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationField') }})
    leap_duration_field: Optional[shared_durationfield.DurationField] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leapDurationField') }})
    lenient: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lenient') }})
    maximum_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumValue') }})
    minimum_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumValue') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    range_duration_field: Optional[shared_durationfield.DurationField] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeDurationField') }})
    supported: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported') }})
    type: Optional[shared_datetimefieldtype.DateTimeFieldType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
