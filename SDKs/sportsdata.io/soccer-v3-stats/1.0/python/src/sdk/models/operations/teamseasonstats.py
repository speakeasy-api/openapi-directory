import dataclasses
from typing import Any,Optional
from enum import Enum

class TeamSeasonStatsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class TeamSeasonStatsPathParams:
    format: TeamSeasonStatsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    roundid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roundid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamSeasonStatsRequest:
    path_params: TeamSeasonStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamSeasonStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_seasons: Optional[list[Any]] = dataclasses.field(default=None)
    
