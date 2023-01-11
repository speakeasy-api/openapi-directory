import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1networkdevice as shared_googlechromemanagementv1networkdevice


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1NetworkInfo:
    r"""GoogleChromeManagementV1NetworkInfo
    Network device information. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
    """
    
    network_devices: Optional[list[shared_googlechromemanagementv1networkdevice.GoogleChromeManagementV1NetworkDevice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkDevices') }})
    
