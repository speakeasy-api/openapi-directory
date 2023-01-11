import dataclasses
from typing import Any,Optional
from ..shared import paymentinitiationpaymenttokencreaterequest as shared_paymentinitiationpaymenttokencreaterequest


@dataclasses.dataclass
class CreatePaymentTokenRequest:
    request: shared_paymentinitiationpaymenttokencreaterequest.PaymentInitiationPaymentTokenCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePaymentTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_initiation_payment_token_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
