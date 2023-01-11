import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetCurrentUserRequest:
    request: Optional[bytes] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclasses.dataclass
class GetCurrentUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
