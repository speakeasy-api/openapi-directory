import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import membership as shared_membership


@dataclass_json
@dataclasses.dataclass
class ListAdminClusterMembershipsResponse:
    r"""ListAdminClusterMembershipsResponse
    Response message for the `GkeHub.ListAdminClusterMemberships` method.
    """
    
    admin_cluster_memberships: Optional[list[shared_membership.Membership]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminClusterMemberships') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
