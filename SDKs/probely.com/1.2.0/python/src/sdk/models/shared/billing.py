import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Billing:
    address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    vat_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vat_number') }})
    zip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    other: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other') }})
    reg_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reg_number') }})
    
