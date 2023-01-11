import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryIDPublicPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDPublicRequest:
    path_params: StoryIDPublicPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDPublicResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    reveal_js_presenation: Optional[str] = dataclasses.field(default=None)
    
