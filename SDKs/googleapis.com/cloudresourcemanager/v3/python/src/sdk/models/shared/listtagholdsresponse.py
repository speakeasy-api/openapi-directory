import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taghold as shared_taghold


@dataclass_json
@dataclasses.dataclass
class ListTagHoldsResponse:
    r"""ListTagHoldsResponse
    The ListTagHolds response.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tag_holds: Optional[list[shared_taghold.TagHold]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagHolds') }})
    
