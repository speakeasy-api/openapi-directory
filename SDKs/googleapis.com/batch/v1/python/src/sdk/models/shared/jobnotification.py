import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import message as shared_message


@dataclass_json
@dataclasses.dataclass
class JobNotification:
    r"""JobNotification
    Notification configurations.
    """
    
    message: Optional[shared_message.Message] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    pubsub_topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    
