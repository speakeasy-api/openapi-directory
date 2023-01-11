import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import paymentinfo as shared_paymentinfo


@dataclasses.dataclass
class GetPaymentInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    payment_info: Optional[shared_paymentinfo.PaymentInfo] = dataclasses.field(default=None)
    
