import dataclasses
from typing import Any,Optional
from ..shared import registersmsrequest as shared_registersmsrequest


@dataclasses.dataclass
class RegisterSmsRequest:
    request: shared_registersmsrequest.RegisterSmsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterSmsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
