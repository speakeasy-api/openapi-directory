import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1DeviceHardwareCountReport:
    r"""GoogleChromeManagementV1DeviceHardwareCountReport
    Report for CountChromeDevicesPerHardwareSpecResponse, contains the count of devices with a unique hardware specification.
    """
    
    bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    
