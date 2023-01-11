import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import numericbucketingoption as shared_numericbucketingoption

class CompensationHistogramRequestTypeEnum(str, Enum):
    COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
    BASE = "BASE"
    ANNUALIZED_BASE = "ANNUALIZED_BASE"
    ANNUALIZED_TOTAL = "ANNUALIZED_TOTAL"


@dataclass_json
@dataclasses.dataclass
class CompensationHistogramRequest:
    r"""CompensationHistogramRequest
    Input only. Compensation based histogram request.
    """
    
    bucketing_option: Optional[shared_numericbucketingoption.NumericBucketingOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketingOption') }})
    type: Optional[CompensationHistogramRequestTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
