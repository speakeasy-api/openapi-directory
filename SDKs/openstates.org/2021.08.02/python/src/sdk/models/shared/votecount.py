import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VoteCount:
    option: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('option') }})
    value: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
