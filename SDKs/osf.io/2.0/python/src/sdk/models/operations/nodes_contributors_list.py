import dataclasses
from typing import Optional


@dataclasses.dataclass
class NodesContributorsListPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesContributorsListRequest:
    path_params: NodesContributorsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesContributorsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
