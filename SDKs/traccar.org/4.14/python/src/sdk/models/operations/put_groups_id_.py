import dataclasses
from typing import Optional
from ..shared import group as shared_group


@dataclasses.dataclass
class PutGroupsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutGroupsIDRequest:
    path_params: PutGroupsIDPathParams = dataclasses.field()
    request: shared_group.Group = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutGroupsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group: Optional[shared_group.Group] = dataclasses.field(default=None)
    
