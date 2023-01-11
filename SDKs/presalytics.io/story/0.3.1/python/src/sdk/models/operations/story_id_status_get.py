import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryIDStatusGetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDStatusGetRequest:
    path_params: StoryIDStatusGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDStatusGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    status: Optional[Any] = dataclasses.field(default=None)
    
