import dataclasses
from typing import Optional


@dataclasses.dataclass
class NodesFilesReadPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    provider: str = dataclasses.field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesFilesReadRequest:
    path_params: NodesFilesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesFilesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
