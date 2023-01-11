import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DriveTimeBreak:
    duration: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    max_driving_time: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_driving_time') }})
    initial_driving_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initial_driving_time') }})
    possible_split: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('possible_split') }})
    
