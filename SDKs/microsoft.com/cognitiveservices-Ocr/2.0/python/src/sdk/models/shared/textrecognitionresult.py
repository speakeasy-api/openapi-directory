import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import line as shared_line

class TextRecognitionResultUnitEnum(str, Enum):
    PIXEL = "pixel"
    INCH = "inch"


@dataclass_json
@dataclasses.dataclass
class TextRecognitionResult:
    r"""TextRecognitionResult
    An object representing a recognized text region
    """
    
    lines: list[shared_line.Line] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    clockwise_orientation: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clockwiseOrientation') }})
    height: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    unit: Optional[TextRecognitionResultUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    width: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
