import dataclasses
from typing import Any,Optional
from ..shared import paymentinitiationrecipientlistrequest as shared_paymentinitiationrecipientlistrequest


@dataclasses.dataclass
class PaymentInitiationRecipientListRequest:
    request: shared_paymentinitiationrecipientlistrequest.PaymentInitiationRecipientListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PaymentInitiationRecipientListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_initiation_recipient_list_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
