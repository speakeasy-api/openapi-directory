import dataclasses
from typing import Optional


@dataclasses.dataclass
class NodesCommentsListPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesCommentsListRequest:
    path_params: NodesCommentsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesCommentsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
