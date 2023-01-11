import dataclasses
from typing import Optional


@dataclasses.dataclass
class NodesContributorsReadPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesContributorsReadRequest:
    path_params: NodesContributorsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesContributorsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
