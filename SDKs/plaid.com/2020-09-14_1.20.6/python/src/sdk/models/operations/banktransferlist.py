import dataclasses
from typing import Any,Optional
from ..shared import banktransferlistrequest as shared_banktransferlistrequest


@dataclasses.dataclass
class BankTransferListRequest:
    request: shared_banktransferlistrequest.BankTransferListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BankTransferListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bank_transfer_list_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
