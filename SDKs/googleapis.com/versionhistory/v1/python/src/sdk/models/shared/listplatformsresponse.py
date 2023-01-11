import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import platform as shared_platform


@dataclass_json
@dataclasses.dataclass
class ListPlatformsResponse:
    r"""ListPlatformsResponse
    Response message for ListPlatforms.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    platforms: Optional[list[shared_platform.Platform]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platforms') }})
    
