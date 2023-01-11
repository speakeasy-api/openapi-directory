import dataclasses
from typing import Any,Optional
from ..shared import withdrawpaymentrequest as shared_withdrawpaymentrequest


@dataclasses.dataclass
class WithdrawPaymentPathParams:
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WithdrawPaymentRequest:
    path_params: WithdrawPaymentPathParams = dataclasses.field()
    request: shared_withdrawpaymentrequest.WithdrawPaymentRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class WithdrawPaymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
