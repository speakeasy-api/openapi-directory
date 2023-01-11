import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import person as shared_person


@dataclass_json
@dataclasses.dataclass
class ListConnectionsResponse:
    r"""ListConnectionsResponse
    The response to a request for the authenticated user's connections.
    """
    
    connections: Optional[list[shared_person.Person]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    next_sync_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextSyncToken') }})
    total_items: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    total_people: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPeople') }})
    
