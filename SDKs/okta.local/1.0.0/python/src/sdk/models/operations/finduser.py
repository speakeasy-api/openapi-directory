import dataclasses
from typing import Optional


@dataclasses.dataclass
class FindUserQueryParams:
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FindUserRequest:
    query_params: FindUserQueryParams = dataclasses.field()
    request: Optional[bytes] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclasses.dataclass
class FindUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
