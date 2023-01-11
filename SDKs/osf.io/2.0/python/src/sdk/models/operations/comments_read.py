import dataclasses
from typing import Optional


@dataclasses.dataclass
class CommentsReadPathParams:
    comment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CommentsReadRequest:
    path_params: CommentsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CommentsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
