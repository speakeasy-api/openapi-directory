import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreakTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    SPACE = "SPACE"
    SURE_SPACE = "SURE_SPACE"
    EOL_SURE_SPACE = "EOL_SURE_SPACE"
    HYPHEN = "HYPHEN"
    LINE_BREAK = "LINE_BREAK"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak:
    r"""GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak
    Detected start or end of a structural component.
    """
    
    is_prefix: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPrefix') }})
    type: Optional[GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreakTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
