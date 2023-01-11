import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gridrange as shared_gridrange

class MergeCellsRequestMergeTypeEnum(str, Enum):
    MERGE_ALL = "MERGE_ALL"
    MERGE_COLUMNS = "MERGE_COLUMNS"
    MERGE_ROWS = "MERGE_ROWS"


@dataclass_json
@dataclasses.dataclass
class MergeCellsRequest:
    r"""MergeCellsRequest
    Merges all cells in the range.
    """
    
    merge_type: Optional[MergeCellsRequestMergeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeType') }})
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
