import dataclasses
from typing import Any,Optional
from ..shared import paymentinitiationrecipientcreaterequest as shared_paymentinitiationrecipientcreaterequest


@dataclasses.dataclass
class PaymentInitiationRecipientCreateRequest:
    request: shared_paymentinitiationrecipientcreaterequest.PaymentInitiationRecipientCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PaymentInitiationRecipientCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_initiation_recipient_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
