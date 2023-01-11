import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logentry as shared_logentry
from ..shared import metricvalueset as shared_metricvalueset
from ..shared import quotaproperties as shared_quotaproperties
from ..shared import resourceinfo as shared_resourceinfo
from ..shared import tracespan as shared_tracespan

class OperationImportanceEnum(str, Enum):
    LOW = "LOW"
    HIGH = "HIGH"
    DEBUG = "DEBUG"


@dataclass_json
@dataclasses.dataclass
class Operation:
    r"""Operation
    Represents information regarding an operation.
    """
    
    consumer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerId') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    importance: Optional[OperationImportanceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importance') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    log_entries: Optional[list[shared_logentry.LogEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logEntries') }})
    metric_value_sets: Optional[list[shared_metricvalueset.MetricValueSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValueSets') }})
    operation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    operation_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationName') }})
    quota_properties: Optional[shared_quotaproperties.QuotaProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaProperties') }})
    resources: Optional[list[shared_resourceinfo.ResourceInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    trace_spans: Optional[list[shared_tracespan.TraceSpan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traceSpans') }})
    user_labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    
