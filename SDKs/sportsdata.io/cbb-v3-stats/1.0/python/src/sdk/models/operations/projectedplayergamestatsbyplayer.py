import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class ProjectedPlayerGameStatsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ProjectedPlayerGameStatsByPlayerPathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByPlayerFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectedPlayerGameStatsByPlayerRequest:
    path_params: ProjectedPlayerGameStatsByPlayerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectedPlayerGameStatsByPlayerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_game_projection: Optional[Any] = dataclasses.field(default=None)
    
