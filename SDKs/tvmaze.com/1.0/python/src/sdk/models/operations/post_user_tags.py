import dataclasses
from typing import Optional
from ..shared import tag as shared_tag
from ..shared import tag as shared_tag


@dataclasses.dataclass
class PostUserTagsRequest:
    request: Optional[shared_tag.TagInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostUserTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
