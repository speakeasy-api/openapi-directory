import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import team as shared_team


@dataclasses.dataclass
class TeamsListPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListRequest:
    path_params: TeamsListPathParams = dataclasses.field()
    query_params: TeamsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    teams: Optional[list[shared_team.Team]] = dataclasses.field(default=None)
    
