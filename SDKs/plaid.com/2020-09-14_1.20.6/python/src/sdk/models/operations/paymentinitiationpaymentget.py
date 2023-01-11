import dataclasses
from typing import Any,Optional
from ..shared import paymentinitiationpaymentgetrequest as shared_paymentinitiationpaymentgetrequest


@dataclasses.dataclass
class PaymentInitiationPaymentGetRequest:
    request: shared_paymentinitiationpaymentgetrequest.PaymentInitiationPaymentGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PaymentInitiationPaymentGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_initiation_payment_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
