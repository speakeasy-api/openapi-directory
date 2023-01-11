import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ErrorUnauthorized:
    error_title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
