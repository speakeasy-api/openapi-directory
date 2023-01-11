import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiorendertimelinespaninstrumentgroup as shared_audiorendertimelinespaninstrumentgroup
from ..shared import audiorendertimelinespanregion as shared_audiorendertimelinespanregion
from ..shared import audiorendertimelinespantempochanges as shared_audiorendertimelinespantempochanges

class AudioRenderTimelineSpanSpanTypeEnum(str, Enum):
    METERED = "metered"
    UNMETERED = "unmetered"


@dataclass_json
@dataclasses.dataclass
class AudioRenderTimelineSpan:
    r"""AudioRenderTimelineSpan
    The beginning of a non-overlapping period of absolute time
    """
    
    span_type: AudioRenderTimelineSpanSpanTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('span_type') }})
    time: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instrument_groups: Optional[list[shared_audiorendertimelinespaninstrumentgroup.AudioRenderTimelineSpanInstrumentGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instrument_groups') }})
    regions: Optional[list[shared_audiorendertimelinespanregion.AudioRenderTimelineSpanRegion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    tempo: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempo') }})
    tempo_changes: Optional[list[shared_audiorendertimelinespantempochanges.AudioRenderTimelineSpanTempoChanges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempo_changes') }})
    
