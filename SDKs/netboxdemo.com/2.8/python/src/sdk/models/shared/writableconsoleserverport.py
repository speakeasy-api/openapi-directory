import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedcable as shared_nestedcable

class WritableConsoleServerPortTypeEnum(str, Enum):
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
class WritableConsoleServerPortInput:
    device: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    cable: Optional[shared_nestedcable.NestedCableInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cable') }})
    connection_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[WritableConsoleServerPortTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
