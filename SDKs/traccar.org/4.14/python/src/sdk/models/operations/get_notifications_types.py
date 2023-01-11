import dataclasses
from typing import Optional
from ..shared import notificationtype as shared_notificationtype


@dataclasses.dataclass
class GetNotificationsTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notification_types: Optional[list[shared_notificationtype.NotificationType]] = dataclasses.field(default=None)
    
