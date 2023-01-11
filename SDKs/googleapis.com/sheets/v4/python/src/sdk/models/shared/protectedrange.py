import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import editors as shared_editors
from ..shared import gridrange as shared_gridrange


@dataclass_json
@dataclasses.dataclass
class ProtectedRange:
    r"""ProtectedRange
    A protected range.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    editors: Optional[shared_editors.Editors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editors') }})
    named_range_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRangeId') }})
    protected_range_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedRangeId') }})
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    requesting_user_can_edit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestingUserCanEdit') }})
    unprotected_ranges: Optional[list[shared_gridrange.GridRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unprotectedRanges') }})
    warning_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warningOnly') }})
    
