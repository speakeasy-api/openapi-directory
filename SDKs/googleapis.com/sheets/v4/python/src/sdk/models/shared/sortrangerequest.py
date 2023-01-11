import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gridrange as shared_gridrange
from ..shared import sortspec as shared_sortspec


@dataclass_json
@dataclasses.dataclass
class SortRangeRequest:
    r"""SortRangeRequest
    Sorts data in rows based on a sort order per column.
    """
    
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    sort_specs: Optional[list[shared_sortspec.SortSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortSpecs') }})
    
