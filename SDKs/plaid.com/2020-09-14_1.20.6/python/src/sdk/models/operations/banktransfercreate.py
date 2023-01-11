import dataclasses
from typing import Any,Optional
from ..shared import banktransfercreaterequest as shared_banktransfercreaterequest


@dataclasses.dataclass
class BankTransferCreateRequest:
    request: shared_banktransfercreaterequest.BankTransferCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BankTransferCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bank_transfer_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
