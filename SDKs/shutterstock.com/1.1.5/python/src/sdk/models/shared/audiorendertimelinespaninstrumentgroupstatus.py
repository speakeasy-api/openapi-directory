import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class AudioRenderTimelineSpanInstrumentGroupStatus:
    r"""AudioRenderTimelineSpanInstrumentGroupStatus
    The status of an instrument at a specific beat
    """
    
    beat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beat') }})
    status: AudioRenderTimelineSpanInstrumentGroupStatusStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
