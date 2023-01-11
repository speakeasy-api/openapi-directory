import dataclasses
from typing import Any,Optional
from ..shared import incomeverificationpaystubsgetrequest as shared_incomeverificationpaystubsgetrequest


@dataclasses.dataclass
class IncomeVerificationPaystubsGetRequest:
    request: shared_incomeverificationpaystubsgetrequest.IncomeVerificationPaystubsGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IncomeVerificationPaystubsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    income_verification_paystubs_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
