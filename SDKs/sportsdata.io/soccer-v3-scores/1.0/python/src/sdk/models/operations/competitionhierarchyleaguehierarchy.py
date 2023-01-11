import dataclasses
from typing import Any,Optional
from enum import Enum

class CompetitionHierarchyLeagueHierarchyFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class CompetitionHierarchyLeagueHierarchyPathParams:
    format: CompetitionHierarchyLeagueHierarchyFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompetitionHierarchyLeagueHierarchyRequest:
    path_params: CompetitionHierarchyLeagueHierarchyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CompetitionHierarchyLeagueHierarchyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    areas: Optional[list[Any]] = dataclasses.field(default=None)
    
