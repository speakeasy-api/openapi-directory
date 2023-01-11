import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import internalrange as shared_internalrange


@dataclass_json
@dataclasses.dataclass
class ListInternalRangesResponse:
    r"""ListInternalRangesResponse
    Response for InternalRange.ListInternalRanges
    """
    
    internal_ranges: Optional[list[shared_internalrange.InternalRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalRanges') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
