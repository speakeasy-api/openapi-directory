import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import highshelf as shared_highshelf
from ..shared import lowshelf as shared_lowshelf


@dataclass_json
@dataclasses.dataclass
class UserEq:
    high_shelf: shared_highshelf.HighShelf = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('high_shelf') }})
    low_shelf: shared_lowshelf.LowShelf = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('low_shelf') }})
    max_peaking_eqs: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_peaking_eqs') }})
    peaking_eqs: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('peaking_eqs') }})
    
