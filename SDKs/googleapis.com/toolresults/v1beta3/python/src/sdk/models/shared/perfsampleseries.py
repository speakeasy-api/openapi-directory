import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basicperfsampleseries as shared_basicperfsampleseries


@dataclass_json
@dataclasses.dataclass
class PerfSampleSeries:
    r"""PerfSampleSeries
    Resource representing a collection of performance samples (or data points)
    """
    
    basic_perf_sample_series: Optional[shared_basicperfsampleseries.BasicPerfSampleSeries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicPerfSampleSeries') }})
    execution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    history_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historyId') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    sample_series_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleSeriesId') }})
    step_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepId') }})
    
