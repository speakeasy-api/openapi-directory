import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RateLimit:
    limit: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    remaining: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining') }})
    reset: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset') }})
    
