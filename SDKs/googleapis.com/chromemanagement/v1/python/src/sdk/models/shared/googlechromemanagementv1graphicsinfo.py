import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1graphicsadapterinfo as shared_googlechromemanagementv1graphicsadapterinfo


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1GraphicsInfo:
    r"""GoogleChromeManagementV1GraphicsInfo
    Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
    """
    
    adapter_info: Optional[shared_googlechromemanagementv1graphicsadapterinfo.GoogleChromeManagementV1GraphicsAdapterInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adapterInfo') }})
    
