import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiorendertimelinespaninstrumentgroupstatus as shared_audiorendertimelinespaninstrumentgroupstatus


@dataclass_json
@dataclasses.dataclass
class AudioRenderTimelineSpanInstrumentGroup:
    r"""AudioRenderTimelineSpanInstrumentGroup
    An instrument and the status objects that specify when that instrument plays
    """
    
    instrument_group: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instrument_group') }})
    statuses: Optional[list[shared_audiorendertimelinespaninstrumentgroupstatus.AudioRenderTimelineSpanInstrumentGroupStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    
