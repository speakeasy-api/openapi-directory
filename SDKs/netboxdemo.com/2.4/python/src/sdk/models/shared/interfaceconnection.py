import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedinterface as shared_nestedinterface


@dataclass_json
@dataclasses.dataclass
class InterfaceConnectionConnectionStatus:
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class InterfaceConnection:
    interface_a: shared_nestedinterface.NestedInterface = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface_a') }})
    interface_b: shared_nestedinterface.NestedInterface = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface_b') }})
    connection_status: Optional[InterfaceConnectionConnectionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
