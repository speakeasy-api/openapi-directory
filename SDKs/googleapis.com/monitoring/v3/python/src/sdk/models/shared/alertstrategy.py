import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationratelimit as shared_notificationratelimit


@dataclass_json
@dataclasses.dataclass
class AlertStrategy:
    r"""AlertStrategy
    Control over how the notification channels in notification_channels are notified when this alert fires.
    """
    
    auto_close: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoClose') }})
    notification_rate_limit: Optional[shared_notificationratelimit.NotificationRateLimit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationRateLimit') }})
    
