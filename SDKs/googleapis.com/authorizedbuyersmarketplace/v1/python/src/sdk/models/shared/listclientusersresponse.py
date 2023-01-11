import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientuser as shared_clientuser


@dataclass_json
@dataclasses.dataclass
class ListClientUsersResponse:
    r"""ListClientUsersResponse
    Response message for the list method.
    """
    
    client_users: Optional[list[shared_clientuser.ClientUser]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientUsers') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
