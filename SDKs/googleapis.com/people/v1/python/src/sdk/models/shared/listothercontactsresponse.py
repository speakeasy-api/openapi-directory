import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import person as shared_person


@dataclass_json
@dataclasses.dataclass
class ListOtherContactsResponse:
    r"""ListOtherContactsResponse
    The response to a request for the authenticated user's \"Other contacts\".
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    next_sync_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextSyncToken') }})
    other_contacts: Optional[list[shared_person.Person]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherContacts') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
