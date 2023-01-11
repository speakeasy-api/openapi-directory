import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceconfig as shared_deviceconfig
from ..shared import devicecredential as shared_devicecredential
from ..shared import gatewayconfig as shared_gatewayconfig
from ..shared import status as shared_status
from ..shared import devicestate as shared_devicestate

class DeviceLogLevelEnum(str, Enum):
    LOG_LEVEL_UNSPECIFIED = "LOG_LEVEL_UNSPECIFIED"
    NONE = "NONE"
    ERROR = "ERROR"
    INFO = "INFO"
    DEBUG = "DEBUG"


@dataclass_json
@dataclasses.dataclass
class Device:
    r"""Device
    The device resource.
    """
    
    blocked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    config: Optional[shared_deviceconfig.DeviceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    credentials: Optional[list[shared_devicecredential.DeviceCredential]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    gateway_config: Optional[shared_gatewayconfig.GatewayConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayConfig') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_config_ack_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastConfigAckTime') }})
    last_config_send_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastConfigSendTime') }})
    last_error_status: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastErrorStatus') }})
    last_error_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastErrorTime') }})
    last_event_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEventTime') }})
    last_heartbeat_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastHeartbeatTime') }})
    last_state_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStateTime') }})
    log_level: Optional[DeviceLogLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLevel') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    num_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numId') }})
    state: Optional[shared_devicestate.DeviceState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
