import dataclasses
from typing import Optional


@dataclasses.dataclass
class NodesCitationReadPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    style_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'style_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesCitationReadRequest:
    path_params: NodesCitationReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesCitationReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
