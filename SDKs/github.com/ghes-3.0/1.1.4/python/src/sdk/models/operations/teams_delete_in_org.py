import dataclasses



@dataclasses.dataclass
class TeamsDeleteInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsDeleteInOrgRequest:
    path_params: TeamsDeleteInOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsDeleteInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
