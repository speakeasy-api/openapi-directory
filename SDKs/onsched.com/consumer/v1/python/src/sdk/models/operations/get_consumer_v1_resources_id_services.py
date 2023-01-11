import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetConsumerV1ResourcesIDServicesPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1ResourcesIDServicesQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1ResourcesIDServicesRequest:
    path_params: GetConsumerV1ResourcesIDServicesPathParams = dataclasses.field()
    query_params: GetConsumerV1ResourcesIDServicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1ResourcesIDServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_service_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
