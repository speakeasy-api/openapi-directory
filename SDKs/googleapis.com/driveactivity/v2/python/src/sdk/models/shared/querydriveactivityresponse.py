import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import driveactivity as shared_driveactivity


@dataclass_json
@dataclasses.dataclass
class QueryDriveActivityResponse:
    r"""QueryDriveActivityResponse
    Response message for querying Drive activity.
    """
    
    activities: Optional[list[shared_driveactivity.DriveActivity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
