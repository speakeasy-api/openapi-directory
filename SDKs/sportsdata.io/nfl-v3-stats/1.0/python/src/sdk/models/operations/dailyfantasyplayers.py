import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class DailyFantasyPlayersFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class DailyFantasyPlayersPathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: DailyFantasyPlayersFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DailyFantasyPlayersRequest:
    path_params: DailyFantasyPlayersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DailyFantasyPlayersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    daily_fantasy_players: Optional[list[Any]] = dataclasses.field(default=None)
    
