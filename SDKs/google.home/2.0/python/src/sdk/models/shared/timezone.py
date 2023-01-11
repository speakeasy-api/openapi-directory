import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Timezone:
    display_string: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_string') }})
    offset: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    
