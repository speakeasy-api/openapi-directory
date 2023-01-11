import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TimeWindowBreak:
    duration: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    earliest: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('earliest') }})
    latest: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest') }})
    
