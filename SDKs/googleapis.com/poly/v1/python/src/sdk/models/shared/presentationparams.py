import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import quaternion as shared_quaternion

class PresentationParamsColorSpaceEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    LINEAR = "LINEAR"
    GAMMA = "GAMMA"


@dataclass_json
@dataclasses.dataclass
class PresentationParams:
    r"""PresentationParams
    Hints for displaying the asset, based on information available when the asset was uploaded.
    """
    
    background_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    color_space: Optional[PresentationParamsColorSpaceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorSpace') }})
    orienting_rotation: Optional[shared_quaternion.Quaternion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientingRotation') }})
    
