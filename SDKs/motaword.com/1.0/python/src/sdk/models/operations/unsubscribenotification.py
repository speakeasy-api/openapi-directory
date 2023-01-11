import dataclasses
from typing import Optional
from ..shared import notificationsubscription as shared_notificationsubscription
from ..shared import error as shared_error
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class UnsubscribeNotificationRequest:
    request: Optional[shared_notificationsubscription.NotificationSubscription] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UnsubscribeNotificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
