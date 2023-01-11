import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import duration as shared_duration


@dataclass_json
@dataclasses.dataclass
class AppStartTime:
    fully_drawn_time: Optional[shared_duration.Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyDrawnTime') }})
    initial_display_time: Optional[shared_duration.Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialDisplayTime') }})
    
