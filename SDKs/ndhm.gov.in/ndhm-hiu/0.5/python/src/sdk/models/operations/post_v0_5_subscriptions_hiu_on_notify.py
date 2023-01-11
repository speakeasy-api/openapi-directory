import dataclasses
from typing import Optional
from ..shared import hiusubscriptionnotificationacknowledgment as shared_hiusubscriptionnotificationacknowledgment
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05SubscriptionsHiuOnNotifyHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05SubscriptionsHiuOnNotifyRequest:
    headers: PostV05SubscriptionsHiuOnNotifyHeaders = dataclasses.field()
    request: shared_hiusubscriptionnotificationacknowledgment.HiuSubscriptionNotificationAcknowledgment = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05SubscriptionsHiuOnNotifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
