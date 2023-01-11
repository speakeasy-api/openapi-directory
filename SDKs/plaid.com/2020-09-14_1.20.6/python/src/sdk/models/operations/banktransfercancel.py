import dataclasses
from typing import Any,Optional
from ..shared import banktransfercancelrequest as shared_banktransfercancelrequest


@dataclasses.dataclass
class BankTransferCancelRequest:
    request: shared_banktransfercancelrequest.BankTransferCancelRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BankTransferCancelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bank_transfer_cancel_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
