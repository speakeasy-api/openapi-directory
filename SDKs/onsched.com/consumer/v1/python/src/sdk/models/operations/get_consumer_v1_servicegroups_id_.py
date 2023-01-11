import dataclasses
from typing import Optional
from ..shared import servicegroupviewmodel as shared_servicegroupviewmodel


@dataclasses.dataclass
class GetConsumerV1ServicegroupsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1ServicegroupsIDRequest:
    path_params: GetConsumerV1ServicegroupsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1ServicegroupsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_group_view_model: Optional[shared_servicegroupviewmodel.ServiceGroupViewModel] = dataclasses.field(default=None)
    
