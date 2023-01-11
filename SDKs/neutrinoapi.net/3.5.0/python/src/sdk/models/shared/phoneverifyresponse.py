import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PhoneVerifyResponse:
    calling: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('calling') }})
    number_valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberValid') }})
    security_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityCode') }})
    
