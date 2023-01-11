import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ThrottlingSettingsPeriodEnum(str, Enum):
    SECONDLY = "SECONDLY"
    ROLLING_MINUTE = "ROLLING_MINUTE"


@dataclass_json
@dataclasses.dataclass
class ThrottlingSettings:
    r"""ThrottlingSettings
    Configuration details for webhook throttling.
    """
    
    max_concurrent_requests: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConcurrentRequests') }})
    period: ThrottlingSettingsPeriodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    
