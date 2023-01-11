import dataclasses
from typing import Optional
from ..shared import sendtxrequest as shared_sendtxrequest
from ..shared import error as shared_error
from ..shared import broadcasttxresponse as shared_broadcasttxresponse


@dataclasses.dataclass
class TestnetSendTxRequest:
    request: shared_sendtxrequest.SendTxRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TestnetSendTxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    broadcast_tx_response: Optional[shared_broadcasttxresponse.BroadcastTxResponse] = dataclasses.field(default=None)
    
