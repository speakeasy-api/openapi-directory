import dataclasses
from typing import Any,Optional
from ..shared import paymentinitiationrecipientgetrequest as shared_paymentinitiationrecipientgetrequest


@dataclasses.dataclass
class PaymentInitiationRecipientGetRequest:
    request: shared_paymentinitiationrecipientgetrequest.PaymentInitiationRecipientGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PaymentInitiationRecipientGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_initiation_recipient_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
