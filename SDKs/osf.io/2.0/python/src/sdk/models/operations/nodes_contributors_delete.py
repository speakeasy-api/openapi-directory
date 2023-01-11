import dataclasses



@dataclasses.dataclass
class NodesContributorsDeletePathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesContributorsDeleteRequest:
    path_params: NodesContributorsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesContributorsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
