import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Timer:
    fire_time: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fire_time') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    original_duration: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_duration') }})
    status: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
