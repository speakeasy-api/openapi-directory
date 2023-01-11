import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import perfsampleseries as shared_perfsampleseries


@dataclass_json
@dataclasses.dataclass
class ListPerfSampleSeriesResponse:
    perf_sample_series: Optional[list[shared_perfsampleseries.PerfSampleSeries]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perfSampleSeries') }})
    
