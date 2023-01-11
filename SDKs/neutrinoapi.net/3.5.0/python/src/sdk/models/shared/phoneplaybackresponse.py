import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PhonePlaybackResponse:
    calling: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('calling') }})
    number_valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberValid') }})
    
