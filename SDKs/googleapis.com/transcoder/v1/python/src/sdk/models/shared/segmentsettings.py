import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SegmentSettings:
    r"""SegmentSettings
    Segment settings for `ts`, `fmp4` and `vtt`.
    """
    
    individual_segments: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individualSegments') }})
    segment_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentDuration') }})
    
