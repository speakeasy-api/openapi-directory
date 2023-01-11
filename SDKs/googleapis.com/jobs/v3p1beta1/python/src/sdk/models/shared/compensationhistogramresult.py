import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import numericbucketingresult as shared_numericbucketingresult

class CompensationHistogramResultTypeEnum(str, Enum):
    COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
    BASE = "BASE"
    ANNUALIZED_BASE = "ANNUALIZED_BASE"
    ANNUALIZED_TOTAL = "ANNUALIZED_TOTAL"


@dataclass_json
@dataclasses.dataclass
class CompensationHistogramResult:
    r"""CompensationHistogramResult
    Output only. Compensation based histogram result.
    """
    
    result: Optional[shared_numericbucketingresult.NumericBucketingResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    type: Optional[CompensationHistogramResultTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
