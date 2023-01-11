import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablecluster as shared_writablecluster
from ..shared import cluster as shared_cluster


@dataclasses.dataclass
class VirtualizationClustersUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationClustersUpdateRequest:
    path_params: VirtualizationClustersUpdatePathParams = dataclasses.field()
    request: shared_writablecluster.WritableClusterInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationClustersUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster: Optional[shared_cluster.Cluster] = dataclasses.field(default=None)
    
