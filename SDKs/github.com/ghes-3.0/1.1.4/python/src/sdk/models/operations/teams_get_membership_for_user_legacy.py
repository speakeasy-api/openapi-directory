import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import team_membership as shared_team_membership


@dataclasses.dataclass
class TeamsGetMembershipForUserLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsGetMembershipForUserLegacyRequest:
    path_params: TeamsGetMembershipForUserLegacyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsGetMembershipForUserLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    team_membership: Optional[shared_team_membership.TeamMembership] = dataclasses.field(default=None)
    
