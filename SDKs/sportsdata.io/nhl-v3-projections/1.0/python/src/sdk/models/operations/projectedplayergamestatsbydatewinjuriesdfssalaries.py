import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_game_projections: Optional[list[Any]] = dataclasses.field(default=None)
    
