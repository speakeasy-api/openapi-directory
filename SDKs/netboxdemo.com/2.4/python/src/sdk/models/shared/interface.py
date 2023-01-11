import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interfacecircuittermination as shared_interfacecircuittermination
from ..shared import nesteddevice as shared_nesteddevice
from ..shared import nestedinterface as shared_nestedinterface
from ..shared import interfacevlan as shared_interfacevlan


@dataclass_json
@dataclasses.dataclass
class InterfaceFormFactor:
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class InterfaceMode:
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Interface:
    device: shared_nesteddevice.NestedDevice = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    circuit_termination: Optional[shared_interfacecircuittermination.InterfaceCircuitTermination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('circuit_termination') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    form_factor: Optional[InterfaceFormFactor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_factor') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interface_connection: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface_connection') }})
    is_connected: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_connected') }})
    lag: Optional[shared_nestedinterface.NestedInterface] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lag') }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    mgmt_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mgmt_only') }})
    mode: Optional[InterfaceMode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    mtu: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtu') }})
    tagged_vlans: Optional[list[shared_interfacevlan.InterfaceVlan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagged_vlans') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    untagged_vlan: Optional[shared_interfacevlan.InterfaceVlan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('untagged_vlan') }})
    
