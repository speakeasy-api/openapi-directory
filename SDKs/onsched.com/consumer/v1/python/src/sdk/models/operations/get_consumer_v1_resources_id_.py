import dataclasses
from typing import Optional
from ..shared import resourceviewmodel as shared_resourceviewmodel


@dataclasses.dataclass
class GetConsumerV1ResourcesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1ResourcesIDRequest:
    path_params: GetConsumerV1ResourcesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1ResourcesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_view_model: Optional[shared_resourceviewmodel.ResourceViewModel] = dataclasses.field(default=None)
    
