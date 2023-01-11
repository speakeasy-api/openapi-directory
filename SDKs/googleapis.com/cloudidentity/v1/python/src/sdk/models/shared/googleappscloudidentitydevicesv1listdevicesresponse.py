import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappscloudidentitydevicesv1device as shared_googleappscloudidentitydevicesv1device


@dataclass_json
@dataclasses.dataclass
class GoogleAppsCloudidentityDevicesV1ListDevicesResponse:
    r"""GoogleAppsCloudidentityDevicesV1ListDevicesResponse
    Response message that is returned from the ListDevices method.
    """
    
    devices: Optional[list[shared_googleappscloudidentitydevicesv1device.GoogleAppsCloudidentityDevicesV1Device]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
