import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class PlayerGameStatsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerGameStatsByPlayerPathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: PlayerGameStatsByPlayerFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerGameStatsByPlayerRequest:
    path_params: PlayerGameStatsByPlayerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerGameStatsByPlayerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_game: Optional[Any] = dataclasses.field(default=None)
    
