import dataclasses
from typing import Optional
from ..shared import heartbeatresponse as shared_heartbeatresponse


GET_V0_5_HEARTBEAT_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclasses.dataclass
class GetV05HeartbeatRequest:
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class GetV05HeartbeatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    heartbeat_response: Optional[shared_heartbeatresponse.HeartbeatResponse] = dataclasses.field(default=None)
    
