import dataclasses
from typing import Optional
from ..shared import subscriptionrequest as shared_subscriptionrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05SubscriptionRequestsCmInitHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05SubscriptionRequestsCmInitRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    subscription_request: Optional[shared_subscriptionrequest.SubscriptionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05SubscriptionRequestsCmInitRequest:
    headers: PostV05SubscriptionRequestsCmInitHeaders = dataclasses.field()
    request: PostV05SubscriptionRequestsCmInitRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05SubscriptionRequestsCmInitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
