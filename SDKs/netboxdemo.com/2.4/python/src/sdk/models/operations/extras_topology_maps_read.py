import dataclasses
from typing import Optional
from ..shared import topologymap as shared_topologymap


@dataclasses.dataclass
class ExtrasTopologyMapsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasTopologyMapsReadRequest:
    path_params: ExtrasTopologyMapsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasTopologyMapsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    topology_map: Optional[shared_topologymap.TopologyMap] = dataclasses.field(default=None)
    
