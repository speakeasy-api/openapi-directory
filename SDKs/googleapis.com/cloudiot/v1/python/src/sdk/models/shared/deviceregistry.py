import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registrycredential as shared_registrycredential
from ..shared import eventnotificationconfig as shared_eventnotificationconfig
from ..shared import httpconfig as shared_httpconfig
from ..shared import mqttconfig as shared_mqttconfig
from ..shared import statenotificationconfig as shared_statenotificationconfig

class DeviceRegistryLogLevelEnum(str, Enum):
    LOG_LEVEL_UNSPECIFIED = "LOG_LEVEL_UNSPECIFIED"
    NONE = "NONE"
    ERROR = "ERROR"
    INFO = "INFO"
    DEBUG = "DEBUG"


@dataclass_json
@dataclasses.dataclass
class DeviceRegistry:
    r"""DeviceRegistry
    A container for a group of devices.
    """
    
    credentials: Optional[list[shared_registrycredential.RegistryCredential]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    event_notification_configs: Optional[list[shared_eventnotificationconfig.EventNotificationConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventNotificationConfigs') }})
    http_config: Optional[shared_httpconfig.HTTPConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpConfig') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    log_level: Optional[DeviceRegistryLogLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLevel') }})
    mqtt_config: Optional[shared_mqttconfig.MqttConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mqttConfig') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state_notification_config: Optional[shared_statenotificationconfig.StateNotificationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateNotificationConfig') }})
    
