import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gridrange as shared_gridrange

class DeleteRangeRequestShiftDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"


@dataclass_json
@dataclasses.dataclass
class DeleteRangeRequest:
    r"""DeleteRangeRequest
    Deletes a range of cells, shifting other cells into the deleted area.
    """
    
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    shift_dimension: Optional[DeleteRangeRequestShiftDimensionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shiftDimension') }})
    
