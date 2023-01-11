import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remarketinglist as shared_remarketinglist


@dataclass_json
@dataclasses.dataclass
class RemarketingListsListResponse:
    r"""RemarketingListsListResponse
    Remarketing list response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    remarketing_lists: Optional[list[shared_remarketinglist.RemarketingList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remarketingLists') }})
    
