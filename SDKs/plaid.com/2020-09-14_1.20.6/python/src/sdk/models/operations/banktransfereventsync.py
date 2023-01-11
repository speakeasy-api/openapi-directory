import dataclasses
from typing import Any,Optional
from ..shared import banktransfereventsyncrequest as shared_banktransfereventsyncrequest


@dataclasses.dataclass
class BankTransferEventSyncRequest:
    request: shared_banktransfereventsyncrequest.BankTransferEventSyncRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BankTransferEventSyncResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bank_transfer_event_sync_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
