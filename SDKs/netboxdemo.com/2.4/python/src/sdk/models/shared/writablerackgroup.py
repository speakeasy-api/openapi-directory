import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WritableRackGroupInput:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    slug: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    
