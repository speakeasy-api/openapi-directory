import dataclasses
from typing import Optional
from ..shared import cluster as shared_cluster


@dataclasses.dataclass
class VirtualizationClustersReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationClustersReadRequest:
    path_params: VirtualizationClustersReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationClustersReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster: Optional[shared_cluster.Cluster] = dataclasses.field(default=None)
    
