import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nesteddevice as shared_nesteddevice

class RackUnitFaceLabelEnum(str, Enum):
    FRONT = "Front"
    REAR = "Rear"

class RackUnitFaceValueEnum(str, Enum):
    FRONT = "front"
    REAR = "rear"


@dataclass_json
@dataclasses.dataclass
class RackUnitFace:
    label: RackUnitFaceLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: RackUnitFaceValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class RackUnit:
    device: Optional[shared_nesteddevice.NestedDevice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    face: Optional[RackUnitFace] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('face') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
