import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NearbyAttributes:
    max_time: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_time') }})
    min_time: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_time') }})
    
