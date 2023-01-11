import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1installedapp as shared_googlechromemanagementv1installedapp


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1CountInstalledAppsResponse:
    r"""GoogleChromeManagementV1CountInstalledAppsResponse
    Response containing details of queried installed apps.
    """
    
    installed_apps: Optional[list[shared_googlechromemanagementv1installedapp.GoogleChromeManagementV1InstalledApp]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installedApps') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
