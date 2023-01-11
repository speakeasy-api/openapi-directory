import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetableremarketinglist as shared_targetableremarketinglist


@dataclass_json
@dataclasses.dataclass
class TargetableRemarketingListsListResponse:
    r"""TargetableRemarketingListsListResponse
    Targetable remarketing list response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    targetable_remarketing_lists: Optional[list[shared_targetableremarketinglist.TargetableRemarketingList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetableRemarketingLists') }})
    
