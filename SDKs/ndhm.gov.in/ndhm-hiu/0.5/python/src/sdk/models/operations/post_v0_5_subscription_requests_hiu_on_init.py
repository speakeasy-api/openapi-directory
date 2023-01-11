import dataclasses
from typing import Optional
from ..shared import hiusubscriptionrequestreceipt as shared_hiusubscriptionrequestreceipt
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05SubscriptionRequestsHiuOnInitHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05SubscriptionRequestsHiuOnInitRequest:
    headers: PostV05SubscriptionRequestsHiuOnInitHeaders = dataclasses.field()
    request: shared_hiusubscriptionrequestreceipt.HiuSubscriptionRequestReceipt = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05SubscriptionRequestsHiuOnInitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
