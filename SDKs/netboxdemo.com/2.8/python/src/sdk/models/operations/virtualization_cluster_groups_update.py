import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import clustergroup as shared_clustergroup
from ..shared import clustergroup as shared_clustergroup


@dataclasses.dataclass
class VirtualizationClusterGroupsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationClusterGroupsUpdateRequest:
    path_params: VirtualizationClusterGroupsUpdatePathParams = dataclasses.field()
    request: shared_clustergroup.ClusterGroupInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VirtualizationClusterGroupsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cluster_group: Optional[shared_clustergroup.ClusterGroup] = dataclasses.field(default=None)
    
