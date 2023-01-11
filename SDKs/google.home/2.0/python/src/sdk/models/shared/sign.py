import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Sign:
    certificate: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    intermediate_certs: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intermediate_certs') }})
    nonce: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonce') }})
    signed_data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signed_data') }})
    
