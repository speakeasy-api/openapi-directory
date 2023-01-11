import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlehomeenterprisesdmv1device as shared_googlehomeenterprisesdmv1device


@dataclass_json
@dataclasses.dataclass
class GoogleHomeEnterpriseSdmV1ListDevicesResponse:
    r"""GoogleHomeEnterpriseSdmV1ListDevicesResponse
    Response message for SmartDeviceManagementService.ListDevices
    """
    
    devices: Optional[list[shared_googlehomeenterprisesdmv1device.GoogleHomeEnterpriseSdmV1Device]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
