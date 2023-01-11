import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tunneldestgroup as shared_tunneldestgroup


@dataclass_json
@dataclasses.dataclass
class ListTunnelDestGroupsResponse:
    r"""ListTunnelDestGroupsResponse
    The response from ListTunnelDestGroups.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tunnel_dest_groups: Optional[list[shared_tunneldestgroup.TunnelDestGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tunnelDestGroups') }})
    
