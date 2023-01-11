import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryIDOutlinePostPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDOutlinePostRequest:
    path_params: StoryIDOutlinePostPathParams = dataclasses.field()
    request: str = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StoryIDOutlinePostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
