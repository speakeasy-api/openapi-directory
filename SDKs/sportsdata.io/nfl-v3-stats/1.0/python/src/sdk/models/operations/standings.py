import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StandingsPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StandingsRequest:
    path_params: StandingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StandingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    standings: Optional[list[Any]] = dataclasses.field(default=None)
    
