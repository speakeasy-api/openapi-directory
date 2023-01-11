import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryIDAnalyticsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDAnalyticsRequest:
    path_params: StoryIDAnalyticsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDAnalyticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    login_button: Optional[str] = dataclasses.field(default=None)
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    reveal_js_presenation_with_analytics_data: Optional[str] = dataclasses.field(default=None)
    
