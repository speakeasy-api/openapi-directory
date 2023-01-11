import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Arc:
    dir: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dir') }})
    end: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    start: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
