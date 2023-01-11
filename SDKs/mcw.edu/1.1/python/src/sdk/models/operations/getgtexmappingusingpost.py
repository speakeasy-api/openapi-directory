import dataclasses
from typing import Optional
from ..shared import rgdidlistrequest as shared_rgdidlistrequest


@dataclasses.dataclass
class GetGtexMappingUsingPostRequest:
    request: Optional[shared_rgdidlistrequest.RgdidListRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetGtexMappingUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
