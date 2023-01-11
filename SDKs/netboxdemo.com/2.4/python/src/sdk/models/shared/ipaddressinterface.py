import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nesteddevice as shared_nesteddevice
from ..shared import nestedvirtualmachine as shared_nestedvirtualmachine


@dataclass_json
@dataclasses.dataclass
class IPAddressInterface:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    device: Optional[shared_nesteddevice.NestedDevice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    virtual_machine: Optional[shared_nestedvirtualmachine.NestedVirtualMachine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_machine') }})
    
