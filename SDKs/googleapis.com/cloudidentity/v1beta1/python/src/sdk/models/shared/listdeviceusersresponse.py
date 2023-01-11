import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceuser as shared_deviceuser


@dataclass_json
@dataclasses.dataclass
class ListDeviceUsersResponse:
    r"""ListDeviceUsersResponse
    Response message that is returned from the ListDeviceUsers method.
    """
    
    device_users: Optional[list[shared_deviceuser.DeviceUser]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceUsers') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
