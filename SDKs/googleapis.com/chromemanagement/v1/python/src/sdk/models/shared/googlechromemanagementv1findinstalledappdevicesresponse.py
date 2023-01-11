import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1device as shared_googlechromemanagementv1device


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1FindInstalledAppDevicesResponse:
    r"""GoogleChromeManagementV1FindInstalledAppDevicesResponse
    Response containing a list of devices with queried app installed.
    """
    
    devices: Optional[list[shared_googlechromemanagementv1device.GoogleChromeManagementV1Device]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
