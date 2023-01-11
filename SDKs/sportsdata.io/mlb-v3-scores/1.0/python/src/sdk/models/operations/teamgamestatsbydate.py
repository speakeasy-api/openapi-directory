import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class TeamGameStatsByDateFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class TeamGameStatsByDatePathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: TeamGameStatsByDateFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamGameStatsByDateRequest:
    path_params: TeamGameStatsByDatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamGameStatsByDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_games: Optional[list[Any]] = dataclasses.field(default=None)
    
