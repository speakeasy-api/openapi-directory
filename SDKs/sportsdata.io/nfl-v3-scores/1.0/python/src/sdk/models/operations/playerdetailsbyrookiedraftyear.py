import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerDetailsByRookieDraftYearFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerDetailsByRookieDraftYearPathParams:
    format: PlayerDetailsByRookieDraftYearFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerDetailsByRookieDraftYearRequest:
    path_params: PlayerDetailsByRookieDraftYearPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerDetailsByRookieDraftYearResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    players: Optional[list[Any]] = dataclasses.field(default=None)
    
