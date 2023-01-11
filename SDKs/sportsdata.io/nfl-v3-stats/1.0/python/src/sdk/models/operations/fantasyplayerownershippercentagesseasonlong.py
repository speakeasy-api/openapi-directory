import dataclasses
from typing import Any,Optional
from enum import Enum

class FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class FantasyPlayerOwnershipPercentagesSeasonLongPathParams:
    format: FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FantasyPlayerOwnershipPercentagesSeasonLongRequest:
    path_params: FantasyPlayerOwnershipPercentagesSeasonLongPathParams = dataclasses.field()
    

@dataclasses.dataclass
class FantasyPlayerOwnershipPercentagesSeasonLongResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_ownerships: Optional[list[Any]] = dataclasses.field(default=None)
    
