import dataclasses
from typing import Optional
from ..shared import writablecluster as shared_writablecluster
from ..shared import cluster as shared_cluster


@dataclasses.dataclass
class VirtualizationClustersCreateRequest:
    request: shared_writablecluster.WritableClusterInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationClustersCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster: Optional[shared_cluster.Cluster] = dataclasses.field(default=None)
    
