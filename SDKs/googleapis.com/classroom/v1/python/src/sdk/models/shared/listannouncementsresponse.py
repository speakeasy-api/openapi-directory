import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import announcement as shared_announcement


@dataclass_json
@dataclasses.dataclass
class ListAnnouncementsResponse:
    r"""ListAnnouncementsResponse
    Response when listing course work.
    """
    
    announcements: Optional[list[shared_announcement.Announcement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('announcements') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
