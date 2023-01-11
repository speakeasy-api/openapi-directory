import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changelog as shared_changelog


@dataclass_json
@dataclasses.dataclass
class ChangeLogsListResponse:
    r"""ChangeLogsListResponse
    Change Log List Response
    """
    
    change_logs: Optional[list[shared_changelog.ChangeLog]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeLogs') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
