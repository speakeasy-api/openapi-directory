import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import paymentinfo as shared_paymentinfo


@dataclasses.dataclass
class GetUserPaymentInfoPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserPaymentInfoRequest:
    path_params: GetUserPaymentInfoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserPaymentInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    payment_info: Optional[shared_paymentinfo.PaymentInfo] = dataclasses.field(default=None)
    
