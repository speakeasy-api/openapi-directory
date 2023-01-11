import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writabletopologymap as shared_writabletopologymap
from ..shared import topologymap as shared_topologymap


@dataclasses.dataclass
class ExtrasTopologyMapsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasTopologyMapsPartialUpdateRequest:
    path_params: ExtrasTopologyMapsPartialUpdatePathParams = dataclasses.field()
    request: shared_writabletopologymap.WritableTopologyMapInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtrasTopologyMapsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    topology_map: Optional[shared_topologymap.TopologyMap] = dataclasses.field(default=None)
    
