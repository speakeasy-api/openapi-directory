import dataclasses
from typing import Any


@dataclasses.dataclass
class CommentsPutPathParams:
    comment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CommentsPutRequest:
    path_params: CommentsPutPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CommentsPutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
