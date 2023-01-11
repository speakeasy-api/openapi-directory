import dataclasses
from typing import Any,Optional
from enum import Enum

class SeasonTeamsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class SeasonTeamsPathParams:
    format: SeasonTeamsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    seasonid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'seasonid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SeasonTeamsRequest:
    path_params: SeasonTeamsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SeasonTeamsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    season_teams: Optional[list[Any]] = dataclasses.field(default=None)
    
