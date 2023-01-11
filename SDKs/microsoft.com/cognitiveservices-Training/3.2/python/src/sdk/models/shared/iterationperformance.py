import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagperformance as shared_tagperformance


@dataclass_json
@dataclasses.dataclass
class IterationPerformance:
    r"""IterationPerformance
    Represents the detailed performance data for a trained iteration.
    """
    
    average_precision: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averagePrecision') }})
    per_tag_performance: Optional[list[shared_tagperformance.TagPerformance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perTagPerformance') }})
    precision: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    precision_std_deviation: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precisionStdDeviation') }})
    recall: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recall') }})
    recall_std_deviation: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recallStdDeviation') }})
    
