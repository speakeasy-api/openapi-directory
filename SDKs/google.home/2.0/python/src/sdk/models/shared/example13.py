import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Example13:
    can_enroll: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_enroll') }})
    enrollment_state: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrollment_state') }})
    error_code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_code') }})
    ready: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ready') }})
    retryable: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryable') }})
    
