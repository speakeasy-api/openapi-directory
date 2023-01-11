import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trigger as shared_trigger

class MonitoringQueryLanguageConditionEvaluationMissingDataEnum(str, Enum):
    EVALUATION_MISSING_DATA_UNSPECIFIED = "EVALUATION_MISSING_DATA_UNSPECIFIED"
    EVALUATION_MISSING_DATA_INACTIVE = "EVALUATION_MISSING_DATA_INACTIVE"
    EVALUATION_MISSING_DATA_ACTIVE = "EVALUATION_MISSING_DATA_ACTIVE"
    EVALUATION_MISSING_DATA_NO_OP = "EVALUATION_MISSING_DATA_NO_OP"


@dataclass_json
@dataclasses.dataclass
class MonitoringQueryLanguageCondition:
    r"""MonitoringQueryLanguageCondition
    A condition type that allows alert policies to be defined using Monitoring Query Language (https://cloud.google.com/monitoring/mql).
    """
    
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    evaluation_missing_data: Optional[MonitoringQueryLanguageConditionEvaluationMissingDataEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMissingData') }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    trigger: Optional[shared_trigger.Trigger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    
