import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ForgetpaireddeviceRequest:
    bond: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bond') }})
    mac_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    
