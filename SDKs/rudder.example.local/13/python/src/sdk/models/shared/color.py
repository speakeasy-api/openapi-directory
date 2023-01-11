import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Color:
    alpha: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alpha') }})
    blue: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blue') }})
    green: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('green') }})
    red: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('red') }})
    
