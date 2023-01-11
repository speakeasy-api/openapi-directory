import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orfiltersforsegment as shared_orfiltersforsegment


@dataclass_json
@dataclasses.dataclass
class SimpleSegment:
    r"""SimpleSegment
    A Simple segment conditions consist of one or more dimension/metric conditions that can be combined.
    """
    
    or_filters_for_segment: Optional[list[shared_orfiltersforsegment.OrFiltersForSegment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orFiltersForSegment') }})
    
