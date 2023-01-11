import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1browserversion as shared_googlechromemanagementv1browserversion


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1CountChromeVersionsResponse:
    r"""GoogleChromeManagementV1CountChromeVersionsResponse
    Response containing requested browser versions details and counts.
    """
    
    browser_versions: Optional[list[shared_googlechromemanagementv1browserversion.GoogleChromeManagementV1BrowserVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserVersions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
