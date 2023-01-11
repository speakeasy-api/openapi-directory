import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse:
    r"""GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse
    Response containing resource names of the DeviceUsers associated with the caller's credentials.
    """
    
    customer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
