import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryIDRevealPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDRevealRequest:
    path_params: StoryIDRevealPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDRevealResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    login_button: Optional[str] = dataclasses.field(default=None)
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    reveal_js_presenation: Optional[str] = dataclasses.field(default=None)
    
