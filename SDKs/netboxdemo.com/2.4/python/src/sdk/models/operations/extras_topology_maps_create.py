import dataclasses
from typing import Optional
from ..shared import writabletopologymap as shared_writabletopologymap
from ..shared import topologymap as shared_topologymap


@dataclasses.dataclass
class ExtrasTopologyMapsCreateRequest:
    request: shared_writabletopologymap.WritableTopologyMapInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtrasTopologyMapsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    topology_map: Optional[shared_topologymap.TopologyMap] = dataclasses.field(default=None)
    
