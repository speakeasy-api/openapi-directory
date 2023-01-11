import dataclasses
from typing import Any,Optional
from enum import Enum

class TournamentHierarchyFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class TournamentHierarchyPathParams:
    format: TournamentHierarchyFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TournamentHierarchyRequest:
    path_params: TournamentHierarchyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TournamentHierarchyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tournament: Optional[Any] = dataclasses.field(default=None)
    
