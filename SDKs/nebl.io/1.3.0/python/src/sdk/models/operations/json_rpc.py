import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import rpcrequest as shared_rpcrequest
from ..shared import rpcresponse as shared_rpcresponse


JSON_RPC_SERVERS = [
	"http://127.0.0.1:6326",
	"http://127.0.0.1:16326",
]


@dataclasses.dataclass
class JSONRPCSecurity:
    rpc_auth: shared_security.SchemeRPCAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class JSONRPCRequest:
    request: shared_rpcrequest.RPCRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: JSONRPCSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class JSONRPCResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    rpc_response: Optional[shared_rpcresponse.RPCResponse] = dataclasses.field(default=None)
    
