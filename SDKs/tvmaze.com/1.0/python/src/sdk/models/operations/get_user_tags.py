import dataclasses
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class GetUserTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
