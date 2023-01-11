import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timezonesviewmodel as shared_timezonesviewmodel


@dataclass_json
@dataclasses.dataclass
class TimezoneViewModel:
    regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    timezones: Optional[list[shared_timezonesviewmodel.TimezonesViewModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezones') }})
    
