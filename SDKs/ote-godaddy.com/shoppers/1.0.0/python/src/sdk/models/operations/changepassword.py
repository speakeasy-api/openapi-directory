import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ChangePasswordPathParams:
    shopper_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shopperId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChangePasswordRequest:
    path_params: ChangePasswordPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChangePasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[Any] = dataclasses.field(default=None)
    password_error: Optional[Any] = dataclasses.field(default=None)
    shopper_id: Optional[Any] = dataclasses.field(default=None)
    
