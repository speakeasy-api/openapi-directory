import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1telemetrydeviceinfo as shared_googlechromemanagementv1telemetrydeviceinfo
from ..shared import googlechromemanagementv1telemetryhttpslatencychangeevent as shared_googlechromemanagementv1telemetryhttpslatencychangeevent
from ..shared import googlechromemanagementv1telemetrynetworkconnectionstatechangeevent as shared_googlechromemanagementv1telemetrynetworkconnectionstatechangeevent
from ..shared import googlechromemanagementv1telemetryuserinfo as shared_googlechromemanagementv1telemetryuserinfo

class GoogleChromeManagementV1TelemetryEventEventTypeEnum(str, Enum):
    EVENT_TYPE_UNSPECIFIED = "EVENT_TYPE_UNSPECIFIED"
    AUDIO_SEVERE_UNDERRUN = "AUDIO_SEVERE_UNDERRUN"
    NETWORK_CONNECTION_STATE_CHANGE = "NETWORK_CONNECTION_STATE_CHANGE"
    USB_ADDED = "USB_ADDED"
    USB_REMOVED = "USB_REMOVED"
    NETWORK_HTTPS_LATENCY_CHANGE = "NETWORK_HTTPS_LATENCY_CHANGE"


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1TelemetryEvent:
    r"""GoogleChromeManagementV1TelemetryEvent
    Telemetry data reported by a managed device.
    """
    
    audio_severe_underrun_event: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioSevereUnderrunEvent') }})
    device: Optional[shared_googlechromemanagementv1telemetrydeviceinfo.GoogleChromeManagementV1TelemetryDeviceInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    event_type: Optional[GoogleChromeManagementV1TelemetryEventEventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    https_latency_change_event: Optional[shared_googlechromemanagementv1telemetryhttpslatencychangeevent.GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEvent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpsLatencyChangeEvent') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_connection_state_change_event: Optional[shared_googlechromemanagementv1telemetrynetworkconnectionstatechangeevent.GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConnectionStateChangeEvent') }})
    report_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTime') }})
    user: Optional[shared_googlechromemanagementv1telemetryuserinfo.GoogleChromeManagementV1TelemetryUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
