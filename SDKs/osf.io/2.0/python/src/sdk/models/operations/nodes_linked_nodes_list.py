import dataclasses
from typing import Optional


@dataclasses.dataclass
class NodesLinkedNodesListPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesLinkedNodesListRequest:
    path_params: NodesLinkedNodesListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesLinkedNodesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
