import dataclasses
from typing import Optional


@dataclasses.dataclass
class NodesFilesListPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    provider: str = dataclasses.field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesFilesListRequest:
    path_params: NodesFilesListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesFilesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
