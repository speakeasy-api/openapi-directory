import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alarm as shared_alarm
from ..shared import timer as shared_timer


@dataclass_json
@dataclasses.dataclass
class Example18:
    alarm: list[shared_alarm.Alarm] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarm') }})
    timer: list[shared_timer.Timer] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer') }})
    
