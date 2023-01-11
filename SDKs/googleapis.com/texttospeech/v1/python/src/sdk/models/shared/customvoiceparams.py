import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CustomVoiceParamsReportedUsageEnum(str, Enum):
    REPORTED_USAGE_UNSPECIFIED = "REPORTED_USAGE_UNSPECIFIED"
    REALTIME = "REALTIME"
    OFFLINE = "OFFLINE"


@dataclass_json
@dataclasses.dataclass
class CustomVoiceParams:
    r"""CustomVoiceParams
    Description of the custom voice to be synthesized.
    """
    
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    reported_usage: Optional[CustomVoiceParamsReportedUsageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportedUsage') }})
    
