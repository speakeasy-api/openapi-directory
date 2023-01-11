import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedcable as shared_nestedcable
from ..shared import nesteddevice as shared_nesteddevice

class ConsoleServerPortConnectionStatusLabelEnum(str, Enum):
    NOT_CONNECTED = "Not Connected"
    CONNECTED = "Connected"


@dataclass_json
@dataclasses.dataclass
class ConsoleServerPortConnectionStatus:
    label: ConsoleServerPortConnectionStatusLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class ConsoleServerPortTypeLabelEnum(str, Enum):
    DE_9 = "DE-9"
    DB_25 = "DB-25"
    RJ_11 = "RJ-11"
    RJ_12 = "RJ-12"
    RJ_45 = "RJ-45"
    USB_TYPE_A = "USB Type A"
    USB_TYPE_B = "USB Type B"
    USB_TYPE_C = "USB Type C"
    USB_MINI_A = "USB Mini A"
    USB_MINI_B = "USB Mini B"
    USB_MICRO_A = "USB Micro A"
    USB_MICRO_B = "USB Micro B"
    OTHER = "Other"

class ConsoleServerPortTypeValueEnum(str, Enum):
    DE_9 = "de-9"
    DB_25 = "db-25"
    RJ_11 = "rj-11"
    RJ_12 = "rj-12"
    RJ_45 = "rj-45"
    USB_A = "usb-a"
    USB_B = "usb-b"
    USB_C = "usb-c"
    USB_MINI_A = "usb-mini-a"
    USB_MINI_B = "usb-mini-b"
    USB_MICRO_A = "usb-micro-a"
    USB_MICRO_B = "usb-micro-b"
    OTHER = "other"


@dataclass_json
@dataclasses.dataclass
class ConsoleServerPortType:
    label: ConsoleServerPortTypeLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: ConsoleServerPortTypeValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ConsoleServerPort:
    device: shared_nesteddevice.NestedDevice = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    cable: Optional[shared_nestedcable.NestedCable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cable') }})
    connected_endpoint: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connected_endpoint') }})
    connected_endpoint_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connected_endpoint_type') }})
    connection_status: Optional[ConsoleServerPortConnectionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[ConsoleServerPortType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
