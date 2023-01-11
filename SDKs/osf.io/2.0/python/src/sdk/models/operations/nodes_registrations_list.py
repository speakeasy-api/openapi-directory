import dataclasses
from typing import Optional


@dataclasses.dataclass
class NodesRegistrationsListPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesRegistrationsListRequest:
    path_params: NodesRegistrationsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesRegistrationsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
