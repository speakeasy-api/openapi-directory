import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hub as shared_hub


@dataclass_json
@dataclasses.dataclass
class ListHubsResponse:
    r"""ListHubsResponse
    Response for HubService.ListHubs method.
    """
    
    hubs: Optional[list[shared_hub.Hub]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hubs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
