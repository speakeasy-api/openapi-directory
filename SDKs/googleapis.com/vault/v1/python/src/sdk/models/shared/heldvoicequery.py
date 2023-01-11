import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HeldVoiceQueryCoveredDataEnum(str, Enum):
    COVERED_DATA_UNSPECIFIED = "COVERED_DATA_UNSPECIFIED"
    TEXT_MESSAGES = "TEXT_MESSAGES"
    VOICEMAILS = "VOICEMAILS"
    CALL_LOGS = "CALL_LOGS"


@dataclass_json
@dataclasses.dataclass
class HeldVoiceQuery:
    r"""HeldVoiceQuery
    Options for Voice holds.
    """
    
    covered_data: Optional[list[HeldVoiceQueryCoveredDataEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coveredData') }})
    
