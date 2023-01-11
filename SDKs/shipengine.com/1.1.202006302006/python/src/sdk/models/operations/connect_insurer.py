import dataclasses
from typing import Any,Optional
from ..shared import connect_insurer_request_body as shared_connect_insurer_request_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class ConnectInsurerRequest:
    request: shared_connect_insurer_request_body.ConnectInsurerRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ConnectInsurerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connect_insurer_response_body: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
