import dataclasses
from typing import Optional
from ..shared import broadcasttxrequest as shared_broadcasttxrequest
from ..shared import error as shared_error
from ..shared import broadcasttxresponse as shared_broadcasttxresponse


@dataclasses.dataclass
class TestnetBroadcastTxRequest:
    request: shared_broadcasttxrequest.BroadcastTxRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TestnetBroadcastTxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    broadcast_tx_response: Optional[shared_broadcasttxresponse.BroadcastTxResponse] = dataclasses.field(default=None)
    
