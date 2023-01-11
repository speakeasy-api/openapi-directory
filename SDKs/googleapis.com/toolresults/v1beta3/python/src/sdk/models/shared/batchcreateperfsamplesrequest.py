import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import perfsample as shared_perfsample


@dataclass_json
@dataclasses.dataclass
class BatchCreatePerfSamplesRequest:
    r"""BatchCreatePerfSamplesRequest
    The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error
    """
    
    perf_samples: Optional[list[shared_perfsample.PerfSample]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perfSamples') }})
    
