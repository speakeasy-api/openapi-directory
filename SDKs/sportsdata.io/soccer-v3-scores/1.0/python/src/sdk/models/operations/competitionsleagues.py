import dataclasses
from typing import Any,Optional
from enum import Enum

class CompetitionsLeaguesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class CompetitionsLeaguesPathParams:
    format: CompetitionsLeaguesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompetitionsLeaguesRequest:
    path_params: CompetitionsLeaguesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CompetitionsLeaguesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    competitions: Optional[list[Any]] = dataclasses.field(default=None)
    
