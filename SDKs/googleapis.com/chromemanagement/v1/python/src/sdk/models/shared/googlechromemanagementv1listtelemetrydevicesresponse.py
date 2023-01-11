import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1telemetrydevice as shared_googlechromemanagementv1telemetrydevice


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1ListTelemetryDevicesResponse:
    devices: Optional[list[shared_googlechromemanagementv1telemetrydevice.GoogleChromeManagementV1TelemetryDevice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
