import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagperformance as shared_tagperformance


@dataclass_json
@dataclasses.dataclass
class IterationPerformance:
    r"""IterationPerformance
    Represents the detailed performance data for a trained iteration
    """
    
    per_tag_performance: Optional[list[shared_tagperformance.TagPerformance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerTagPerformance') }})
    precision: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Precision') }})
    precision_std_deviation: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrecisionStdDeviation') }})
    recall: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recall') }})
    recall_std_deviation: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecallStdDeviation') }})
    
