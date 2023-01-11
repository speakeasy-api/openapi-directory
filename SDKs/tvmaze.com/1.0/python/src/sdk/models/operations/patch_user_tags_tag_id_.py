import dataclasses
from typing import Optional
from ..shared import tag as shared_tag
from ..shared import tag as shared_tag


@dataclasses.dataclass
class PatchUserTagsTagIDPathParams:
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchUserTagsTagIDRequest:
    path_params: PatchUserTagsTagIDPathParams = dataclasses.field()
    request: Optional[shared_tag.TagInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchUserTagsTagIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
