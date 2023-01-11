import dataclasses
from typing import Optional
from ..shared import subscriptionapprovalnotification as shared_subscriptionapprovalnotification
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05SubscriptionRequestsHiuNotifyHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05SubscriptionRequestsHiuNotifyRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    subscription_approval_notification: Optional[shared_subscriptionapprovalnotification.SubscriptionApprovalNotification] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05SubscriptionRequestsHiuNotifyRequest:
    headers: PostV05SubscriptionRequestsHiuNotifyHeaders = dataclasses.field()
    request: PostV05SubscriptionRequestsHiuNotifyRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05SubscriptionRequestsHiuNotifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
