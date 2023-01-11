import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orgmembership as shared_orgmembership


@dataclass_json
@dataclasses.dataclass
class ListOrgMembershipsResponse:
    r"""ListOrgMembershipsResponse
    The response message for OrgMembershipsService.ListOrgMemberships.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    org_memberships: Optional[list[shared_orgmembership.OrgMembership]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgMemberships') }})
    
