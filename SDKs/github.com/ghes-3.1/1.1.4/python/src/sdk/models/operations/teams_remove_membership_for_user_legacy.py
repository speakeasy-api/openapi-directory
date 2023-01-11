import dataclasses



@dataclasses.dataclass
class TeamsRemoveMembershipForUserLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsRemoveMembershipForUserLegacyRequest:
    path_params: TeamsRemoveMembershipForUserLegacyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsRemoveMembershipForUserLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
