import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orfiltersforsegment as shared_orfiltersforsegment

class SegmentSequenceStepMatchTypeEnum(str, Enum):
    UNSPECIFIED_MATCH_TYPE = "UNSPECIFIED_MATCH_TYPE"
    PRECEDES = "PRECEDES"
    IMMEDIATELY_PRECEDES = "IMMEDIATELY_PRECEDES"


@dataclass_json
@dataclasses.dataclass
class SegmentSequenceStep:
    r"""SegmentSequenceStep
    A segment sequence definition.
    """
    
    match_type: Optional[SegmentSequenceStepMatchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchType') }})
    or_filters_for_segment: Optional[list[shared_orfiltersforsegment.OrFiltersForSegment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orFiltersForSegment') }})
    
