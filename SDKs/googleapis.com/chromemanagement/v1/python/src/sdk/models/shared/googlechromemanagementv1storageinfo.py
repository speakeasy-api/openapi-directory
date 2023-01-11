import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1storageinfodiskvolume as shared_googlechromemanagementv1storageinfodiskvolume


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1StorageInfo:
    r"""GoogleChromeManagementV1StorageInfo
    Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
    """
    
    available_disk_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableDiskBytes') }})
    total_disk_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDiskBytes') }})
    volume: Optional[list[shared_googlechromemanagementv1storageinfodiskvolume.GoogleChromeManagementV1StorageInfoDiskVolume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
