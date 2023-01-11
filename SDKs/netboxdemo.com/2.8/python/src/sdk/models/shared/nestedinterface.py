import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nesteddevice as shared_nesteddevice

class NestedInterfaceConnectionStatusLabelEnum(str, Enum):
    NOT_CONNECTED = "Not Connected"
    CONNECTED = "Connected"


@dataclass_json
@dataclasses.dataclass
class NestedInterfaceConnectionStatus:
    label: NestedInterfaceConnectionStatusLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class NestedInterface:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    cable: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cable') }})
    connection_status: Optional[NestedInterfaceConnectionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    device: Optional[shared_nesteddevice.NestedDevice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
