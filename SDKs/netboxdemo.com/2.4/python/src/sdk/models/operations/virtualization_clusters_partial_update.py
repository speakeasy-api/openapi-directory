import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablecluster as shared_writablecluster
from ..shared import cluster as shared_cluster


@dataclasses.dataclass
class VirtualizationClustersPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationClustersPartialUpdateRequest:
    path_params: VirtualizationClustersPartialUpdatePathParams = dataclasses.field()
    request: shared_writablecluster.WritableClusterInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationClustersPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster: Optional[shared_cluster.Cluster] = dataclasses.field(default=None)
    
