import dataclasses



@dataclasses.dataclass
class ReposCheckCollaboratorPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposCheckCollaboratorRequest:
    path_params: ReposCheckCollaboratorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposCheckCollaboratorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
