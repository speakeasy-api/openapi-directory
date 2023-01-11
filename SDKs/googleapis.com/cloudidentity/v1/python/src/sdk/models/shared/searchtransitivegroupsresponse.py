import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grouprelation as shared_grouprelation


@dataclass_json
@dataclasses.dataclass
class SearchTransitiveGroupsResponse:
    r"""SearchTransitiveGroupsResponse
    The response message for MembershipsService.SearchTransitiveGroups.
    """
    
    memberships: Optional[list[shared_grouprelation.GroupRelation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
