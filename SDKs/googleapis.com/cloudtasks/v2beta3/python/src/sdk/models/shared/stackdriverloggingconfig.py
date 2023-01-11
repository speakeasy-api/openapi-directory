import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StackdriverLoggingConfig:
    r"""StackdriverLoggingConfig
    Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/).
    """
    
    sampling_ratio: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplingRatio') }})
    
