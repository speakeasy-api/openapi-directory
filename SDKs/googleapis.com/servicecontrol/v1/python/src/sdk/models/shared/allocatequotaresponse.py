import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import quotaerror as shared_quotaerror
from ..shared import allocateinfo as shared_allocateinfo
from ..shared import metricvalueset as shared_metricvalueset


@dataclass_json
@dataclasses.dataclass
class AllocateQuotaResponse:
    r"""AllocateQuotaResponse
    Response message for the AllocateQuota method.
    """
    
    allocate_errors: Optional[list[shared_quotaerror.QuotaError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocateErrors') }})
    allocate_info: Optional[shared_allocateinfo.AllocateInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocateInfo') }})
    operation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    quota_metrics: Optional[list[shared_metricvalueset.MetricValueSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaMetrics') }})
    service_config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    
