import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionrange as shared_dimensionrange


@dataclass_json
@dataclasses.dataclass
class MoveDimensionRequest:
    r"""MoveDimensionRequest
    Moves one or more rows or columns.
    """
    
    destination_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationIndex') }})
    source: Optional[shared_dimensionrange.DimensionRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
