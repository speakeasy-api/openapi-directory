import dataclasses
from typing import Any,Optional
from ..shared import banktransferbalancegetrequest as shared_banktransferbalancegetrequest


@dataclasses.dataclass
class BankTransferBalanceGetRequest:
    request: shared_banktransferbalancegetrequest.BankTransferBalanceGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BankTransferBalanceGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bank_transfer_balance_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
