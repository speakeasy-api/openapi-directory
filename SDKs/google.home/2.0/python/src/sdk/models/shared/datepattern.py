import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DatePattern:
    day: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    month: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('month') }})
    year: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
