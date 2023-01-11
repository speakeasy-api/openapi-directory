import dataclasses
from typing import Optional


@dataclasses.dataclass
class ResetPasswordPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResetPasswordQueryParams:
    send_email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sendEmail', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ResetPasswordRequest:
    path_params: ResetPasswordPathParams = dataclasses.field()
    query_params: ResetPasswordQueryParams = dataclasses.field()
    request: Optional[bytes] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclasses.dataclass
class ResetPasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
