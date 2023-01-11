import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import perfsample as shared_perfsample


@dataclass_json
@dataclasses.dataclass
class ListPerfSamplesResponse:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    perf_samples: Optional[list[shared_perfsample.PerfSample]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perfSamples') }})
    
