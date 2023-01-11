import dataclasses
from typing import Optional


@dataclasses.dataclass
class ApplyNodePathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ApplyNodeRequest:
    path_params: ApplyNodePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ApplyNodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    apply_node_200_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
