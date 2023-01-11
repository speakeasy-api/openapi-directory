import dataclasses
from typing import Any,Optional
from ..shared import banktransfergetrequest as shared_banktransfergetrequest


@dataclasses.dataclass
class BankTransferGetRequest:
    request: shared_banktransfergetrequest.BankTransferGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BankTransferGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bank_transfer_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
