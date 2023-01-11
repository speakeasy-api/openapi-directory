import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CableLengthUnitLabelEnum(str, Enum):
    METERS = "Meters"
    CENTIMETERS = "Centimeters"
    FEET = "Feet"
    INCHES = "Inches"

class CableLengthUnitValueEnum(str, Enum):
    M = "m"
    CM = "cm"
    FT = "ft"
    IN = "in"


@dataclass_json
@dataclasses.dataclass
class CableLengthUnit:
    label: CableLengthUnitLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: CableLengthUnitValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class CableStatusLabelEnum(str, Enum):
    CONNECTED = "Connected"
    PLANNED = "Planned"
    DECOMMISSIONING = "Decommissioning"

class CableStatusValueEnum(str, Enum):
    CONNECTED = "connected"
    PLANNED = "planned"
    DECOMMISSIONING = "decommissioning"


@dataclass_json
@dataclasses.dataclass
class CableStatus:
    label: CableStatusLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: CableStatusValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class CableTypeEnum(str, Enum):
    CAT3 = "cat3"
    CAT5 = "cat5"
    CAT5E = "cat5e"
    CAT6 = "cat6"
    CAT6A = "cat6a"
    CAT7 = "cat7"
    DAC_ACTIVE = "dac-active"
    DAC_PASSIVE = "dac-passive"
    MRJ21_TRUNK = "mrj21-trunk"
    COAXIAL = "coaxial"
    MMF = "mmf"
    MMF_OM1 = "mmf-om1"
    MMF_OM2 = "mmf-om2"
    MMF_OM3 = "mmf-om3"
    MMF_OM4 = "mmf-om4"
    SMF = "smf"
    SMF_OS1 = "smf-os1"
    SMF_OS2 = "smf-os2"
    AOC = "aoc"
    POWER = "power"


@dataclass_json
@dataclasses.dataclass
class Cable:
    termination_a_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_a_id') }})
    termination_a_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_a_type') }})
    termination_b_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_b_id') }})
    termination_b_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_b_type') }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    length_unit: Optional[CableLengthUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length_unit') }})
    status: Optional[CableStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    termination_a: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_a') }})
    termination_b: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termination_b') }})
    type: Optional[CableTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
