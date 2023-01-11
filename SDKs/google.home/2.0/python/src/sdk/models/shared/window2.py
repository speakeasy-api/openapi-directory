import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Window2:
    days: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('days') }})
    length_hours: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('length_hours') }})
    start_hour: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_hour') }})
    
