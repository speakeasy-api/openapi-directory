import dataclasses
from typing import Any,Optional
from ..shared import paymentinitiationpaymentlistrequest as shared_paymentinitiationpaymentlistrequest


@dataclasses.dataclass
class PaymentInitiationPaymentListRequest:
    request: shared_paymentinitiationpaymentlistrequest.PaymentInitiationPaymentListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PaymentInitiationPaymentListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_initiation_payment_list_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
