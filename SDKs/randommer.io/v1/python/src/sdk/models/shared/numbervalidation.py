import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NumberValidation:
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    
