import dataclasses
from typing import Optional
from ..shared import clustergroup as shared_clustergroup
from ..shared import clustergroup as shared_clustergroup


@dataclasses.dataclass
class VirtualizationClusterGroupsCreateRequest:
    request: shared_clustergroup.ClusterGroupInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationClusterGroupsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster_group: Optional[shared_clustergroup.ClusterGroup] = dataclasses.field(default=None)
    
