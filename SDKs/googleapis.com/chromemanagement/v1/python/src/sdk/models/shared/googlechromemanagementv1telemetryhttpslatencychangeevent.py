import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1httpslatencyroutinedata as shared_googlechromemanagementv1httpslatencyroutinedata

class GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEventHTTPSLatencyStateEnum(str, Enum):
    HTTPS_LATENCY_STATE_UNSPECIFIED = "HTTPS_LATENCY_STATE_UNSPECIFIED"
    RECOVERY = "RECOVERY"
    PROBLEM = "PROBLEM"


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEvent:
    r"""GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEvent
    Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem..
    """
    
    https_latency_routine_data: Optional[shared_googlechromemanagementv1httpslatencyroutinedata.GoogleChromeManagementV1HTTPSLatencyRoutineData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpsLatencyRoutineData') }})
    https_latency_state: Optional[GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEventHTTPSLatencyStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpsLatencyState') }})
    
