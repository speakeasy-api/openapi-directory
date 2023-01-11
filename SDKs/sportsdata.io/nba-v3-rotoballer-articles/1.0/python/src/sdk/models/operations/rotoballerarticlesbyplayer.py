import dataclasses
from typing import Any,Optional
from enum import Enum

class RotoballerArticlesByPlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class RotoballerArticlesByPlayerPathParams:
    format: RotoballerArticlesByPlayerFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RotoballerArticlesByPlayerRequest:
    path_params: RotoballerArticlesByPlayerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RotoballerArticlesByPlayerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    articles: Optional[list[Any]] = dataclasses.field(default=None)
    
