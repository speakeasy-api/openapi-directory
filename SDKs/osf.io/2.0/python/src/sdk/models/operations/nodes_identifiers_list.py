import dataclasses
from typing import Optional


@dataclasses.dataclass
class NodesIdentifiersListPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesIdentifiersListRequest:
    path_params: NodesIdentifiersListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesIdentifiersListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
