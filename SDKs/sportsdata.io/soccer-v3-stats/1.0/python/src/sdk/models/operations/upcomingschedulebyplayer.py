import dataclasses
from typing import Any,Optional
from enum import Enum

class UpcomingScheduleByPlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class UpcomingScheduleByPlayerPathParams:
    format: UpcomingScheduleByPlayerFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpcomingScheduleByPlayerRequest:
    path_params: UpcomingScheduleByPlayerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UpcomingScheduleByPlayerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    games: Optional[list[Any]] = dataclasses.field(default=None)
    
