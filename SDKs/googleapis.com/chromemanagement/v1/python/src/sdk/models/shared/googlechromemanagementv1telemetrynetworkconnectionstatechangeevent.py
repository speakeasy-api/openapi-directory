import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum(str, Enum):
    NETWORK_CONNECTION_STATE_UNSPECIFIED = "NETWORK_CONNECTION_STATE_UNSPECIFIED"
    ONLINE = "ONLINE"
    CONNECTED = "CONNECTED"
    PORTAL = "PORTAL"
    CONNECTING = "CONNECTING"
    NOT_CONNECTED = "NOT_CONNECTED"


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent:
    r"""GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent
    `TelemetryNetworkConnectionStateChangeEvent` is triggered on network connection state changes.
    """
    
    connection_state: Optional[GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionState') }})
    guid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guid') }})
    
