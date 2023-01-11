import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LowShelf:
    frequency: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    gain_db: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gain_db') }})
    quality: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    
