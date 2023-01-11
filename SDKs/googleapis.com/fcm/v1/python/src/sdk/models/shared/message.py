import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androidconfig as shared_androidconfig
from ..shared import apnsconfig as shared_apnsconfig
from ..shared import fcmoptions as shared_fcmoptions
from ..shared import notification as shared_notification
from ..shared import webpushconfig as shared_webpushconfig


@dataclass_json
@dataclasses.dataclass
class Message:
    r"""Message
    Message to send by Firebase Cloud Messaging Service.
    """
    
    android: Optional[shared_androidconfig.AndroidConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('android') }})
    apns: Optional[shared_apnsconfig.ApnsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apns') }})
    condition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    data: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    fcm_options: Optional[shared_fcmoptions.FcmOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fcmOptions') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification: Optional[shared_notification.Notification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    webpush: Optional[shared_webpushconfig.WebpushConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webpush') }})
    
