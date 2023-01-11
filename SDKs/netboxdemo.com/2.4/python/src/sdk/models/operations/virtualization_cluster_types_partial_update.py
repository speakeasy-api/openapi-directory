import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import clustertype as shared_clustertype
from ..shared import clustertype as shared_clustertype


@dataclasses.dataclass
class VirtualizationClusterTypesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationClusterTypesPartialUpdateRequest:
    path_params: VirtualizationClusterTypesPartialUpdatePathParams = dataclasses.field()
    request: shared_clustertype.ClusterTypeInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationClusterTypesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster_type: Optional[shared_clustertype.ClusterType] = dataclasses.field(default=None)
    
