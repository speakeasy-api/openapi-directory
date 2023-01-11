import dataclasses
from typing import Any,Optional
from ..shared import banktransfereventlistrequest as shared_banktransfereventlistrequest


@dataclasses.dataclass
class BankTransferEventListRequest:
    request: shared_banktransfereventlistrequest.BankTransferEventListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BankTransferEventListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bank_transfer_event_list_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
