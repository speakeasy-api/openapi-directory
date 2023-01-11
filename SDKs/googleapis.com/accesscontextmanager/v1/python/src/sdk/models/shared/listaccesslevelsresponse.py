import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesslevel as shared_accesslevel


@dataclass_json
@dataclasses.dataclass
class ListAccessLevelsResponse:
    r"""ListAccessLevelsResponse
    A response to `ListAccessLevelsRequest`.
    """
    
    access_levels: Optional[list[shared_accesslevel.AccessLevel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLevels') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
