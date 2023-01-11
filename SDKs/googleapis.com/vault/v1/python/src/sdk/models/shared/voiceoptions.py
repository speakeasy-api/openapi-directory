import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VoiceOptionsCoveredDataEnum(str, Enum):
    COVERED_DATA_UNSPECIFIED = "COVERED_DATA_UNSPECIFIED"
    TEXT_MESSAGES = "TEXT_MESSAGES"
    VOICEMAILS = "VOICEMAILS"
    CALL_LOGS = "CALL_LOGS"


@dataclass_json
@dataclasses.dataclass
class VoiceOptions:
    r"""VoiceOptions
    Additional options for Voice search
    """
    
    covered_data: Optional[list[VoiceOptionsCoveredDataEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coveredData') }})
    
