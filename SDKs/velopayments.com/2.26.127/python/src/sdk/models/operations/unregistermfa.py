import dataclasses
from typing import Any,Optional
from ..shared import unregistermfarequest as shared_unregistermfarequest


@dataclasses.dataclass
class UnregisterMfaPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnregisterMfaRequest:
    path_params: UnregisterMfaPathParams = dataclasses.field()
    request: shared_unregistermfarequest.UnregisterMfaRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UnregisterMfaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
