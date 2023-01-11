import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import team as shared_team
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class TeamsListChildLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListChildLegacyQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListChildLegacyRequest:
    path_params: TeamsListChildLegacyPathParams = dataclasses.field()
    query_params: TeamsListChildLegacyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListChildLegacyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    teams: Optional[list[shared_team.Team]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
