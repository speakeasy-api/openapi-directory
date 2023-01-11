import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mobileusabilityissue as shared_mobileusabilityissue

class MobileUsabilityInspectionResultVerdictEnum(str, Enum):
    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    PASS = "PASS"
    PARTIAL = "PARTIAL"
    FAIL = "FAIL"
    NEUTRAL = "NEUTRAL"


@dataclass_json
@dataclasses.dataclass
class MobileUsabilityInspectionResult:
    r"""MobileUsabilityInspectionResult
    Mobile-usability inspection results.
    """
    
    issues: Optional[list[shared_mobileusabilityissue.MobileUsabilityIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    verdict: Optional[MobileUsabilityInspectionResultVerdictEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verdict') }})
    
