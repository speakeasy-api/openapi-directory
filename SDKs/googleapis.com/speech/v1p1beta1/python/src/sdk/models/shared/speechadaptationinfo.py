import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SpeechAdaptationInfo:
    r"""SpeechAdaptationInfo
    Information on speech adaptation use in results
    """
    
    adaptation_timeout: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adaptationTimeout') }})
    timeout_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutMessage') }})
    
