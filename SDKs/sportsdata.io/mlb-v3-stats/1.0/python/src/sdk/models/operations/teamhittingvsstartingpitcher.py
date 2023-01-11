import dataclasses
from typing import Any,Optional
from enum import Enum

class TeamHittingVsStartingPitcherFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class TeamHittingVsStartingPitcherPathParams:
    format: TeamHittingVsStartingPitcherFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    gameid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'gameid', 'style': 'simple', 'explode': False }})
    team: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamHittingVsStartingPitcherRequest:
    path_params: TeamHittingVsStartingPitcherPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamHittingVsStartingPitcherResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_seasons: Optional[list[Any]] = dataclasses.field(default=None)
    
