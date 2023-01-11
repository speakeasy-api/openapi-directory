import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class UnpackRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UnpackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    unpack_200_wildcard_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
