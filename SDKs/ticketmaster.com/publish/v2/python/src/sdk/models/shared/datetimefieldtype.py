import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import durationfieldtype as shared_durationfieldtype


@dataclass_json
@dataclasses.dataclass
class DateTimeFieldType:
    duration_type: Optional[shared_durationfieldtype.DurationFieldType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationType') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    range_duration_type: Optional[shared_durationfieldtype.DurationFieldType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeDurationType') }})
    
