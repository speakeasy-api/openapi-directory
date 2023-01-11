import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedvlan as shared_nestedvlan
from ..shared import nestedvirtualmachine as shared_nestedvirtualmachine

class VirtualMachineInterfaceModeLabelEnum(str, Enum):
    ACCESS = "Access"
    TAGGED = "Tagged"
    TAGGED_ALL_ = "Tagged (All)"

class VirtualMachineInterfaceModeValueEnum(str, Enum):
    ACCESS = "access"
    TAGGED = "tagged"
    TAGGED_ALL = "tagged-all"


@dataclass_json
@dataclasses.dataclass
class VirtualMachineInterfaceMode:
    label: VirtualMachineInterfaceModeLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: VirtualMachineInterfaceModeValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class VirtualMachineInterfaceTypeLabelEnum(str, Enum):
    VIRTUAL = "Virtual"

class VirtualMachineInterfaceTypeValueEnum(str, Enum):
    VIRTUAL = "virtual"


@dataclass_json
@dataclasses.dataclass
class VirtualMachineInterfaceType:
    label: VirtualMachineInterfaceTypeLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: VirtualMachineInterfaceTypeValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class VirtualMachineInterface:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    virtual_machine: shared_nestedvirtualmachine.NestedVirtualMachine = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_machine') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    mode: Optional[VirtualMachineInterfaceMode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    mtu: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtu') }})
    tagged_vlans: Optional[list[shared_nestedvlan.NestedVlan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagged_vlans') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[VirtualMachineInterfaceType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    untagged_vlan: Optional[shared_nestedvlan.NestedVlan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('untagged_vlan') }})
    
