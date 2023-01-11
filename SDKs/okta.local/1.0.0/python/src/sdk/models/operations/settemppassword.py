import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetTempPasswordPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetTempPasswordQueryParams:
    temp_password: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tempPassword', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SetTempPasswordRequest:
    path_params: SetTempPasswordPathParams = dataclasses.field()
    query_params: SetTempPasswordQueryParams = dataclasses.field()
    request: Optional[bytes] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclasses.dataclass
class SetTempPasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
