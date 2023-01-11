import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HighShelf1:
    gain_db: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gain_db') }})
    
