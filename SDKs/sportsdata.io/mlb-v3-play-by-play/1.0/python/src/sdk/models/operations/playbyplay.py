import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayByPlayFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayByPlayPathParams:
    format: PlayByPlayFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    gameid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'gameid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayByPlayRequest:
    path_params: PlayByPlayPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayByPlayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    play_by_play: Optional[Any] = dataclasses.field(default=None)
    
