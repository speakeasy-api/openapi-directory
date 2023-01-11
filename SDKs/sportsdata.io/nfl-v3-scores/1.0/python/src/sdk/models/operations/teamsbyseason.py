import dataclasses
from typing import Any,Optional
from enum import Enum

class TeamsBySeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class TeamsBySeasonPathParams:
    format: TeamsBySeasonFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsBySeasonRequest:
    path_params: TeamsBySeasonPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsBySeasonResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    teams: Optional[list[Any]] = dataclasses.field(default=None)
    
