import dataclasses
from typing import Optional
from ..shared import tagsingle as shared_tagsingle


@dataclasses.dataclass
class TagsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TagsReadRequest:
    path_params: TagsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TagsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag_single: Optional[shared_tagsingle.TagSingle] = dataclasses.field(default=None)
    
