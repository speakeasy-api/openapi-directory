import dataclasses
from typing import Any,Optional
from ..shared import paymentinitiationpaymentcreaterequest as shared_paymentinitiationpaymentcreaterequest


@dataclasses.dataclass
class PaymentInitiationPaymentCreateRequest:
    request: shared_paymentinitiationpaymentcreaterequest.PaymentInitiationPaymentCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PaymentInitiationPaymentCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_initiation_payment_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
