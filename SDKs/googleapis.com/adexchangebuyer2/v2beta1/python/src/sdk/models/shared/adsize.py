import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AdSizeSizeTypeEnum(str, Enum):
    SIZE_TYPE_UNSPECIFIED = "SIZE_TYPE_UNSPECIFIED"
    PIXEL = "PIXEL"
    INTERSTITIAL = "INTERSTITIAL"
    NATIVE = "NATIVE"
    FLUID = "FLUID"


@dataclass_json
@dataclasses.dataclass
class AdSize:
    r"""AdSize
    Represents size of a single ad slot, or a creative.
    """
    
    height: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    size_type: Optional[AdSizeSizeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeType') }})
    width: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
