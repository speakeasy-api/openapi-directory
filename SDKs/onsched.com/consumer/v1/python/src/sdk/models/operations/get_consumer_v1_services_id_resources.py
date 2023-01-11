import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetConsumerV1ServicesIDResourcesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1ServicesIDResourcesQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1ServicesIDResourcesRequest:
    path_params: GetConsumerV1ServicesIDResourcesPathParams = dataclasses.field()
    query_params: GetConsumerV1ServicesIDResourcesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1ServicesIDResourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
