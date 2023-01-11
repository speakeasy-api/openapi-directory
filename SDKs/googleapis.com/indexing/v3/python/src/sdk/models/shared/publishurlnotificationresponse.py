import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import urlnotificationmetadata as shared_urlnotificationmetadata


@dataclass_json
@dataclasses.dataclass
class PublishURLNotificationResponse:
    r"""PublishURLNotificationResponse
    Output for PublishUrlNotification
    """
    
    url_notification_metadata: Optional[shared_urlnotificationmetadata.URLNotificationMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlNotificationMetadata') }})
    
