import dataclasses
from typing import Optional


@dataclasses.dataclass
class NodesChildrenListPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesChildrenListRequest:
    path_params: NodesChildrenListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesChildrenListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
