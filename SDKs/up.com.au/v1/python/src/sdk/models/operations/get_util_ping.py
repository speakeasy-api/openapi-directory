import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import pingresponse as shared_pingresponse


@dataclasses.dataclass
class GetUtilPingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    ping_response: Optional[shared_pingresponse.PingResponse] = dataclasses.field(default=None)
    
