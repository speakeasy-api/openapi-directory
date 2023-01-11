import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_game_projections: Optional[list[Any]] = dataclasses.field(default=None)
    
