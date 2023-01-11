import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiencesegment as shared_audiencesegment


@dataclass_json
@dataclasses.dataclass
class AudienceSegmentGroup:
    r"""AudienceSegmentGroup
    Audience Segment Group.
    """
    
    audience_segments: Optional[list[shared_audiencesegment.AudienceSegment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceSegments') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
