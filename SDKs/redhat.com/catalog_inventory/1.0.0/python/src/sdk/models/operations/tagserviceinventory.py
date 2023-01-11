import dataclasses
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class TagServiceInventoryPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TagServiceInventoryRequest:
    path_params: TagServiceInventoryPathParams = dataclasses.field()
    request: list[shared_tag.Tag] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TagServiceInventoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
