import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sequencesegment as shared_sequencesegment
from ..shared import simplesegment as shared_simplesegment


@dataclass_json
@dataclasses.dataclass
class SegmentFilter:
    r"""SegmentFilter
    SegmentFilter defines the segment to be either a simple or a sequence segment. A simple segment condition contains dimension and metric conditions to select the sessions or users. A sequence segment condition can be used to select users or sessions based on sequential conditions.
    """
    
    not_: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('not') }})
    sequence_segment: Optional[shared_sequencesegment.SequenceSegment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceSegment') }})
    simple_segment: Optional[shared_simplesegment.SimpleSegment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleSegment') }})
    
