import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notification as shared_notification


@dataclass_json
@dataclasses.dataclass
class Settings:
    r"""Settings
    Customer-level settings.
    """
    
    notifications: Optional[list[shared_notification.Notification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    
