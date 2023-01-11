import dataclasses
from typing import Any,Optional
from enum import Enum

class PremiumNewsByPlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class PremiumNewsByPlayerPathParams:
    format: PremiumNewsByPlayerFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PremiumNewsByPlayerRequest:
    path_params: PremiumNewsByPlayerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PremiumNewsByPlayerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    news: Optional[list[Any]] = dataclasses.field(default=None)
    
