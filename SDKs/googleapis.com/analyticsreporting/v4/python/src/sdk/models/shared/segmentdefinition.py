import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import segmentfilter as shared_segmentfilter


@dataclass_json
@dataclasses.dataclass
class SegmentDefinition:
    r"""SegmentDefinition
    SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation.
    """
    
    segment_filters: Optional[list[shared_segmentfilter.SegmentFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentFilters') }})
    
