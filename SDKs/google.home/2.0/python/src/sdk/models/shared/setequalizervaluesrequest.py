import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import highshelf1 as shared_highshelf1
from ..shared import lowshelf1 as shared_lowshelf1


@dataclass_json
@dataclasses.dataclass
class SetEqualizerValuesRequest:
    high_shelf: shared_highshelf1.HighShelf1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('high_shelf') }})
    low_shelf: shared_lowshelf1.LowShelf1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('low_shelf') }})
    
