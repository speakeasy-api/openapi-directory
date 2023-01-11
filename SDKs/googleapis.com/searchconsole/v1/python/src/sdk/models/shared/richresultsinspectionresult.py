import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detecteditems as shared_detecteditems

class RichResultsInspectionResultVerdictEnum(str, Enum):
    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    PASS = "PASS"
    PARTIAL = "PARTIAL"
    FAIL = "FAIL"
    NEUTRAL = "NEUTRAL"


@dataclass_json
@dataclasses.dataclass
class RichResultsInspectionResult:
    r"""RichResultsInspectionResult
    Rich-Results inspection result, including any rich results found at this URL.
    """
    
    detected_items: Optional[list[shared_detecteditems.DetectedItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedItems') }})
    verdict: Optional[RichResultsInspectionResultVerdictEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verdict') }})
    
