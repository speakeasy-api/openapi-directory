import dataclasses
from typing import Optional


@dataclasses.dataclass
class NodesDraftRegistrationsReadPathParams:
    draft_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'draft_id', 'style': 'simple', 'explode': False }})
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesDraftRegistrationsReadRequest:
    path_params: NodesDraftRegistrationsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesDraftRegistrationsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
