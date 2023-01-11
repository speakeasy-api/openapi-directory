import dataclasses
from typing import Optional
from ..shared import tag as shared_tag
from ..shared import tag as shared_tag


@dataclasses.dataclass
class ExtrasTagsCreateRequest:
    request: shared_tag.TagInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtrasTagsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
