import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ReactionRollup:
    plus_1: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('+1') }})
    minus_1: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('-1') }})
    confused: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confused') }})
    eyes: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eyes') }})
    heart: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('heart') }})
    hooray: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooray') }})
    laugh: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('laugh') }})
    rocket: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rocket') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
