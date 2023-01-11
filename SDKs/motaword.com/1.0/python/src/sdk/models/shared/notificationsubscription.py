import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NotificationSubscriptionDeviceEnum(str, Enum):
    I_OS = "iOS"
    ANDROID = "Android"
    CHROME = "Chrome"
    FIREFOX = "Firefox"
    SAFARI = "Safari"
    EDGE = "Edge"
    AMAZON = "Amazon"
    WINDOWS_PHONE = "WindowsPhone"
    WINDOWS = "Windows"
    MAC_OS = "MacOS"

class NotificationSubscriptionTypeEnum(str, Enum):
    ONE_SIGNAL = "OneSignal"


@dataclass_json
@dataclasses.dataclass
class NotificationSubscription:
    device: Optional[NotificationSubscriptionDeviceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    type: Optional[NotificationSubscriptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
