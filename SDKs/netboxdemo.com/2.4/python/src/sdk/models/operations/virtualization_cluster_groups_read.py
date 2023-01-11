import dataclasses
from typing import Optional
from ..shared import clustergroup as shared_clustergroup


@dataclasses.dataclass
class VirtualizationClusterGroupsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationClusterGroupsReadRequest:
    path_params: VirtualizationClusterGroupsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationClusterGroupsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster_group: Optional[shared_clustergroup.ClusterGroup] = dataclasses.field(default=None)
    
