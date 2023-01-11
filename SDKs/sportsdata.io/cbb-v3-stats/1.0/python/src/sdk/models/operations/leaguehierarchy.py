import dataclasses
from typing import Any,Optional
from enum import Enum

class LeagueHierarchyFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class LeagueHierarchyPathParams:
    format: LeagueHierarchyFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LeagueHierarchyRequest:
    path_params: LeagueHierarchyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class LeagueHierarchyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conferences: Optional[list[Any]] = dataclasses.field(default=None)
    
