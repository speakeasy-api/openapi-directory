import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionprofile as shared_connectionprofile


@dataclass_json
@dataclasses.dataclass
class ListConnectionProfilesResponse:
    r"""ListConnectionProfilesResponse
    Response message for 'ListConnectionProfiles' request.
    """
    
    connection_profiles: Optional[list[shared_connectionprofile.ConnectionProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionProfiles') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
