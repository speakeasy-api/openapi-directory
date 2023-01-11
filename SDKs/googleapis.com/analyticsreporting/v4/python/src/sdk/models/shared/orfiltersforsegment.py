import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import segmentfilterclause as shared_segmentfilterclause


@dataclass_json
@dataclasses.dataclass
class OrFiltersForSegment:
    r"""OrFiltersForSegment
    A list of segment filters in the `OR` group are combined with the logical OR operator.
    """
    
    segment_filter_clauses: Optional[list[shared_segmentfilterclause.SegmentFilterClause]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentFilterClauses') }})
    
