import dataclasses
from typing import Any,Optional
from enum import Enum

class NewsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class NewsByPlayerPathParams:
    format: NewsByPlayerFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NewsByPlayerRequest:
    path_params: NewsByPlayerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NewsByPlayerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    news: Optional[list[Any]] = dataclasses.field(default=None)
    
