import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ValidationError:
    loc: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loc') }})
    msg: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('msg') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
