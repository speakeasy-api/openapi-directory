import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricvalueset as shared_metricvalueset

class QuotaOperationQuotaModeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    NORMAL = "NORMAL"
    BEST_EFFORT = "BEST_EFFORT"
    CHECK_ONLY = "CHECK_ONLY"
    ADJUST_ONLY = "ADJUST_ONLY"


@dataclass_json
@dataclasses.dataclass
class QuotaOperation:
    r"""QuotaOperation
    Represents information regarding a quota operation.
    """
    
    consumer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerId') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    method_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodName') }})
    operation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    quota_metrics: Optional[list[shared_metricvalueset.MetricValueSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaMetrics') }})
    quota_mode: Optional[QuotaOperationQuotaModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaMode') }})
    
