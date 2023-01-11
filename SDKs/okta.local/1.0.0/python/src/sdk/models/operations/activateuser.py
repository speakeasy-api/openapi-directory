import dataclasses
from typing import Optional


@dataclasses.dataclass
class ActivateUserPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivateUserQueryParams:
    send_email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sendEmail', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivateUserRequest:
    path_params: ActivateUserPathParams = dataclasses.field()
    query_params: ActivateUserQueryParams = dataclasses.field()
    request: Optional[bytes] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclasses.dataclass
class ActivateUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
