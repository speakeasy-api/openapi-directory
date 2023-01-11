import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SetMuteRequestMuteEnum(str, Enum):
    MUTE_UNSPECIFIED = "MUTE_UNSPECIFIED"
    MUTED = "MUTED"
    UNMUTED = "UNMUTED"
    UNDEFINED = "UNDEFINED"


@dataclass_json
@dataclasses.dataclass
class SetMuteRequest:
    r"""SetMuteRequest
    Request message for updating a finding's mute status.
    """
    
    mute: Optional[SetMuteRequestMuteEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mute') }})
    
