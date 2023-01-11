import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import memberrelation as shared_memberrelation


@dataclass_json
@dataclasses.dataclass
class SearchTransitiveMembershipsResponse:
    r"""SearchTransitiveMembershipsResponse
    The response message for MembershipsService.SearchTransitiveMemberships.
    """
    
    memberships: Optional[list[shared_memberrelation.MemberRelation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
