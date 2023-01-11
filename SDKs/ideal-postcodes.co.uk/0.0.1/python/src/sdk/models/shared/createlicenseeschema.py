import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createlicenseedaily as shared_createlicenseedaily


@dataclass_json
@dataclasses.dataclass
class CreateLicenseeSchema:
    address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    postcode: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('postcode') }})
    daily: Optional[shared_createlicenseedaily.CreateLicenseeDaily] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daily') }})
    whitelist: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whitelist') }})
    
