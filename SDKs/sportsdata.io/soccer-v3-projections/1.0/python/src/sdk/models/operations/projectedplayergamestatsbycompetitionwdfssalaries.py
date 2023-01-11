import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams:
    competition: str = dataclasses.field(metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest:
    path_params: ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_game_projections: Optional[list[Any]] = dataclasses.field(default=None)
    
