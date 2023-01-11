import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1devicehardwarecountreport as shared_googlechromemanagementv1devicehardwarecountreport


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse:
    r"""GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse
    Response containing a list of devices with a specific type of hardware specification from the requested hardware type.
    """
    
    cpu_reports: Optional[list[shared_googlechromemanagementv1devicehardwarecountreport.GoogleChromeManagementV1DeviceHardwareCountReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuReports') }})
    memory_reports: Optional[list[shared_googlechromemanagementv1devicehardwarecountreport.GoogleChromeManagementV1DeviceHardwareCountReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryReports') }})
    model_reports: Optional[list[shared_googlechromemanagementv1devicehardwarecountreport.GoogleChromeManagementV1DeviceHardwareCountReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelReports') }})
    storage_reports: Optional[list[shared_googlechromemanagementv1devicehardwarecountreport.GoogleChromeManagementV1DeviceHardwareCountReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageReports') }})
    
