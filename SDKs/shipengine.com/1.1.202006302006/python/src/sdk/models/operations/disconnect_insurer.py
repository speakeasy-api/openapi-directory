import dataclasses
from typing import Any,Optional
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class DisconnectInsurerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    disconnect_insurer_response_body: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
