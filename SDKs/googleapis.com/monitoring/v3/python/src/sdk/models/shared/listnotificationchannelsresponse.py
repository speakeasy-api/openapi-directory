import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationchannel as shared_notificationchannel


@dataclass_json
@dataclasses.dataclass
class ListNotificationChannelsResponse:
    r"""ListNotificationChannelsResponse
    The ListNotificationChannels response.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    notification_channels: Optional[list[shared_notificationchannel.NotificationChannel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationChannels') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
