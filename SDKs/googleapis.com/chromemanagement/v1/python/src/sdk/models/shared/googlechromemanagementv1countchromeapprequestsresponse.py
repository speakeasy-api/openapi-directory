import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1chromeapprequest as shared_googlechromemanagementv1chromeapprequest


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1CountChromeAppRequestsResponse:
    r"""GoogleChromeManagementV1CountChromeAppRequestsResponse
    Response containing summary of requested app installations.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    requested_apps: Optional[list[shared_googlechromemanagementv1chromeapprequest.GoogleChromeManagementV1ChromeAppRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedApps') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
