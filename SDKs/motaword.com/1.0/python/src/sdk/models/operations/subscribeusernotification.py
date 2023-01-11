import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import notificationsubscription as shared_notificationsubscription
from ..shared import error as shared_error
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class SubscribeUserNotificationPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubscribeUserNotificationSecurity:
    mwo_auth: shared_security.SchemeMwoAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SubscribeUserNotificationRequest:
    path_params: SubscribeUserNotificationPathParams = dataclasses.field()
    security: SubscribeUserNotificationSecurity = dataclasses.field()
    request: Optional[shared_notificationsubscription.NotificationSubscription] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SubscribeUserNotificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
