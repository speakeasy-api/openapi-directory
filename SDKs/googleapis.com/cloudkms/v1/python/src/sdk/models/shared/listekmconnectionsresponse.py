import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ekmconnection as shared_ekmconnection


@dataclass_json
@dataclasses.dataclass
class ListEkmConnectionsResponse:
    r"""ListEkmConnectionsResponse
    Response message for EkmService.ListEkmConnections.
    """
    
    ekm_connections: Optional[list[shared_ekmconnection.EkmConnection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ekmConnections') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
