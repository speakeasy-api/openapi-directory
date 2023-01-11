import dataclasses
from typing import Optional


@dataclasses.dataclass
class SeasonCurrentPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SeasonCurrentRequest:
    path_params: SeasonCurrentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SeasonCurrentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    season_current_200_application_json_integer: Optional[int] = dataclasses.field(default=None)
    
