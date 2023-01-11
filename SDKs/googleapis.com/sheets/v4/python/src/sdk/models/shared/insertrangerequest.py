import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gridrange as shared_gridrange

class InsertRangeRequestShiftDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"


@dataclass_json
@dataclasses.dataclass
class InsertRangeRequest:
    r"""InsertRangeRequest
    Inserts cells into a range, shifting the existing cells over or down.
    """
    
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    shift_dimension: Optional[InsertRangeRequestShiftDimensionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shiftDimension') }})
    
