import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionrange as shared_dimensionrange


@dataclass_json
@dataclasses.dataclass
class InsertDimensionRequest:
    r"""InsertDimensionRequest
    Inserts rows or columns in a sheet at a particular index.
    """
    
    inherit_from_before: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritFromBefore') }})
    range: Optional[shared_dimensionrange.DimensionRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
