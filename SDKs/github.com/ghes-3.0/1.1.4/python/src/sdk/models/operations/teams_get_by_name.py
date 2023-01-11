import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import team_full as shared_team_full


@dataclasses.dataclass
class TeamsGetByNamePathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsGetByNameRequest:
    path_params: TeamsGetByNamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsGetByNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    team_full: Optional[shared_team_full.TeamFull] = dataclasses.field(default=None)
    
