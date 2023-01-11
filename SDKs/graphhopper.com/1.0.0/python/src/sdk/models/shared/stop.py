import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import address as shared_address
from ..shared import timewindow as shared_timewindow


@dataclass_json
@dataclasses.dataclass
class Stop:
    address: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    preparation_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preparation_time') }})
    time_windows: Optional[list[shared_timewindow.TimeWindow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_windows') }})
    
