import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryIDDeletePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDDeleteRequest:
    path_params: StoryIDDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
