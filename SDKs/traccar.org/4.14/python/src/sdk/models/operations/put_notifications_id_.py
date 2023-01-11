import dataclasses
from typing import Optional
from ..shared import notification as shared_notification


@dataclasses.dataclass
class PutNotificationsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutNotificationsIDRequest:
    path_params: PutNotificationsIDPathParams = dataclasses.field()
    request: shared_notification.Notification = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutNotificationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notification: Optional[shared_notification.Notification] = dataclasses.field(default=None)
    
