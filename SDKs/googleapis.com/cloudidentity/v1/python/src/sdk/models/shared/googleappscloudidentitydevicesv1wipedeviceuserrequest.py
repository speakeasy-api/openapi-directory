import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest:
    r"""GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest
    Request message for starting an account wipe on device.
    """
    
    customer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    
