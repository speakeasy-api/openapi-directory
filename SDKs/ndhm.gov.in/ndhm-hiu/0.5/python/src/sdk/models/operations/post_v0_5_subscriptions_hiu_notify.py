import dataclasses
from typing import Optional
from ..shared import hiusubscriptionnotification as shared_hiusubscriptionnotification
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05SubscriptionsHiuNotifyHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05SubscriptionsHiuNotifyRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    hiu_subscription_notification: Optional[shared_hiusubscriptionnotification.HiuSubscriptionNotification] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05SubscriptionsHiuNotifyRequest:
    headers: PostV05SubscriptionsHiuNotifyHeaders = dataclasses.field()
    request: PostV05SubscriptionsHiuNotifyRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05SubscriptionsHiuNotifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
