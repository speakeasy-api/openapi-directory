import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricvalueset as shared_metricvalueset


@dataclass_json
@dataclasses.dataclass
class QuotaInfo:
    r"""QuotaInfo
    Contains the quota information for a quota check response.
    """
    
    limit_exceeded: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitExceeded') }})
    quota_consumed: Optional[dict[str, int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaConsumed') }})
    quota_metrics: Optional[list[shared_metricvalueset.MetricValueSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaMetrics') }})
    
