import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AltName:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    note: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
