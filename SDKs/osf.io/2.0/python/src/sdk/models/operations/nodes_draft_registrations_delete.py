import dataclasses



@dataclasses.dataclass
class NodesDraftRegistrationsDeletePathParams:
    draft_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'draft_id', 'style': 'simple', 'explode': False }})
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesDraftRegistrationsDeleteRequest:
    path_params: NodesDraftRegistrationsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesDraftRegistrationsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
