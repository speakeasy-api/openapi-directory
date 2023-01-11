import dataclasses
from typing import Any,Optional
from enum import Enum

class RotoballerArticlesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class RotoballerArticlesPathParams:
    format: RotoballerArticlesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RotoballerArticlesRequest:
    path_params: RotoballerArticlesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RotoballerArticlesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    articles: Optional[list[Any]] = dataclasses.field(default=None)
    
