import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class LogoutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
