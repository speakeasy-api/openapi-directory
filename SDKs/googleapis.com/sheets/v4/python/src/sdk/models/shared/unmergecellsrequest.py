import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gridrange as shared_gridrange


@dataclass_json
@dataclasses.dataclass
class UnmergeCellsRequest:
    r"""UnmergeCellsRequest
    Unmerges cells in the given range.
    """
    
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
