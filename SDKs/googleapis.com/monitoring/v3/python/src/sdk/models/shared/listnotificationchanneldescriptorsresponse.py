import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationchanneldescriptor as shared_notificationchanneldescriptor


@dataclass_json
@dataclasses.dataclass
class ListNotificationChannelDescriptorsResponse:
    r"""ListNotificationChannelDescriptorsResponse
    The ListNotificationChannelDescriptors response.
    """
    
    channel_descriptors: Optional[list[shared_notificationchanneldescriptor.NotificationChannelDescriptor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelDescriptors') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
