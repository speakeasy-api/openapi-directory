import dataclasses
from typing import Optional


@dataclasses.dataclass
class WeekLastCompletedPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WeekLastCompletedRequest:
    path_params: WeekLastCompletedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class WeekLastCompletedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    week_last_completed_200_application_json_integer: Optional[int] = dataclasses.field(default=None)
    
