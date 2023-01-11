import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappscloudidentitydevicesv1deviceuser as shared_googleappscloudidentitydevicesv1deviceuser


@dataclass_json
@dataclasses.dataclass
class GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse:
    r"""GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
    Response message that is returned from the ListDeviceUsers method.
    """
    
    device_users: Optional[list[shared_googleappscloudidentitydevicesv1deviceuser.GoogleAppsCloudidentityDevicesV1DeviceUser]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceUsers') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
