import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class SchedulePathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScheduleRequest:
    path_params: SchedulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schedules: Optional[list[Any]] = dataclasses.field(default=None)
    
