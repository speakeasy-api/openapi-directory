import dataclasses
from typing import Optional
from ..shared import comment as shared_comment


@dataclasses.dataclass
class Review:
    author_name: Optional[str] = dataclasses.field(default=None)
    comments: Optional[list[shared_comment.Comment]] = dataclasses.field(default=None)
    review_id: Optional[str] = dataclasses.field(default=None)
    
