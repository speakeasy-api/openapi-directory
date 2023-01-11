import dataclasses
from typing import Optional
from ..shared import clustertype as shared_clustertype


@dataclasses.dataclass
class VirtualizationClusterTypesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationClusterTypesReadRequest:
    path_params: VirtualizationClusterTypesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationClusterTypesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster_type: Optional[shared_clustertype.ClusterType] = dataclasses.field(default=None)
    
