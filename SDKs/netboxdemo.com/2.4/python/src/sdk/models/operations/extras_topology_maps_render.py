import dataclasses
from typing import Optional
from ..shared import topologymap as shared_topologymap


@dataclasses.dataclass
class ExtrasTopologyMapsRenderPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasTopologyMapsRenderRequest:
    path_params: ExtrasTopologyMapsRenderPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasTopologyMapsRenderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    topology_map: Optional[shared_topologymap.TopologyMap] = dataclasses.field(default=None)
    
