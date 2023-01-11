import dataclasses
from typing import Optional
from ..shared import group as shared_group


@dataclasses.dataclass
class PostGroupsRequest:
    request: shared_group.Group = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group: Optional[shared_group.Group] = dataclasses.field(default=None)
    
