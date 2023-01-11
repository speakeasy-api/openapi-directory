import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeintervalobject as shared_timeintervalobject
from ..shared import sectionobject as shared_sectionobject
from ..shared import segmentobject as shared_segmentobject


@dataclass_json
@dataclasses.dataclass
class AudioAnalysisObject:
    r"""AudioAnalysisObject

    https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#audio-analysis-object - Find more info on the official Spotify Web API Reference
    """
    
    bars: Optional[list[shared_timeintervalobject.TimeIntervalObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bars') }})
    beats: Optional[list[shared_timeintervalobject.TimeIntervalObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beats') }})
    sections: Optional[list[shared_sectionobject.SectionObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    segments: Optional[list[shared_segmentobject.SegmentObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    tatums: Optional[list[shared_timeintervalobject.TimeIntervalObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tatums') }})
    
