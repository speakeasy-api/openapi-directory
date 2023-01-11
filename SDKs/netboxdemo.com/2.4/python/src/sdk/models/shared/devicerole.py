import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeviceRole:
    color: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    vm_role: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm_role') }})
    

@dataclass_json
@dataclasses.dataclass
class DeviceRoleInput:
    color: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    vm_role: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm_role') }})
    
