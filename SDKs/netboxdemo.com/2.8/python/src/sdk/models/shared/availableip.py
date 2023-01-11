import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedvrf as shared_nestedvrf


@dataclass_json
@dataclasses.dataclass
class AvailableIP:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    family: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('family') }})
    vrf: Optional[shared_nestedvrf.NestedVrf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vrf') }})
    
