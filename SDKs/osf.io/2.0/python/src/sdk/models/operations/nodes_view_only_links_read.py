import dataclasses
from typing import Optional


@dataclasses.dataclass
class NodesViewOnlyLinksReadPathParams:
    link_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesViewOnlyLinksReadRequest:
    path_params: NodesViewOnlyLinksReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodesViewOnlyLinksReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
