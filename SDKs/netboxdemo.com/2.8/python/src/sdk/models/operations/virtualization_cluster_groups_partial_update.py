import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import clustergroup as shared_clustergroup
from ..shared import clustergroup as shared_clustergroup


@dataclasses.dataclass
class VirtualizationClusterGroupsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationClusterGroupsPartialUpdateRequest:
    path_params: VirtualizationClusterGroupsPartialUpdatePathParams = dataclasses.field()
    request: shared_clustergroup.ClusterGroupInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationClusterGroupsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster_group: Optional[shared_clustergroup.ClusterGroup] = dataclasses.field(default=None)
    
