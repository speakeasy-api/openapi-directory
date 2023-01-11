import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pivotheaderentry as shared_pivotheaderentry


@dataclass_json
@dataclasses.dataclass
class PivotHeader:
    r"""PivotHeader
    The headers for each of the pivot sections defined in the request.
    """
    
    pivot_header_entries: Optional[list[shared_pivotheaderentry.PivotHeaderEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotHeaderEntries') }})
    total_pivot_groups_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPivotGroupsCount') }})
    
