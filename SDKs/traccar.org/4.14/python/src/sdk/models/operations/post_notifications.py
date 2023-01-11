import dataclasses
from typing import Optional
from ..shared import notification as shared_notification


@dataclasses.dataclass
class PostNotificationsRequest:
    request: shared_notification.Notification = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostNotificationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notification: Optional[shared_notification.Notification] = dataclasses.field(default=None)
    
