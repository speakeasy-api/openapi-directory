import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monitoredresource as shared_monitoredresource


@dataclass_json
@dataclasses.dataclass
class ListGroupMembersResponse:
    r"""ListGroupMembersResponse
    The ListGroupMembers response.
    """
    
    members: Optional[list[shared_monitoredresource.MonitoredResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
