import dataclasses



@dataclasses.dataclass
class IssuesDeleteLabelPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesDeleteLabelRequest:
    path_params: IssuesDeleteLabelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesDeleteLabelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
