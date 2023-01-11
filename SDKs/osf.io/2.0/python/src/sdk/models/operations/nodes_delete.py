import dataclasses



@dataclasses.dataclass
class NodesDeletePathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesDeleteRequest:
    path_params: NodesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
