import dataclasses
from typing import Optional
from ..shared import clustertype as shared_clustertype
from ..shared import clustertype as shared_clustertype


@dataclasses.dataclass
class VirtualizationClusterTypesCreateRequest:
    request: shared_clustertype.ClusterTypeInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationClusterTypesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster_type: Optional[shared_clustertype.ClusterType] = dataclasses.field(default=None)
    
