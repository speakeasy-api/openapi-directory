import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timestamp as shared_timestamp


@dataclass_json
@dataclasses.dataclass
class PerfSample:
    r"""PerfSample
    Resource representing a single performance measure or data point
    """
    
    sample_time: Optional[shared_timestamp.Timestamp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleTime') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
