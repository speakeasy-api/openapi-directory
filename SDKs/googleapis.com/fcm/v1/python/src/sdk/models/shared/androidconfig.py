import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androidfcmoptions as shared_androidfcmoptions
from ..shared import androidnotification as shared_androidnotification

class AndroidConfigPriorityEnum(str, Enum):
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclasses.dataclass
class AndroidConfig:
    r"""AndroidConfig
    Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).
    """
    
    collapse_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collapseKey') }})
    data: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    direct_boot_ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directBootOk') }})
    fcm_options: Optional[shared_androidfcmoptions.AndroidFcmOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fcmOptions') }})
    notification: Optional[shared_androidnotification.AndroidNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    priority: Optional[AndroidConfigPriorityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    restricted_package_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedPackageName') }})
    ttl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
