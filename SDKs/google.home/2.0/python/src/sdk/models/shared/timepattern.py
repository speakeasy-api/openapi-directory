import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TimePattern:
    hour: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hour') }})
    minute: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minute') }})
    second: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('second') }})
    
