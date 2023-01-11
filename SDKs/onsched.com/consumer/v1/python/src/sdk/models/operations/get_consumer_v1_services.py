import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetConsumerV1ServicesQueryParams:
    all_locations: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allLocations', 'style': 'form', 'explode': True }})
    default_service: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'defaultService', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    scope: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    service_group_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceGroupId', 'style': 'form', 'explode': True }})
    service_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceId', 'style': 'form', 'explode': True }})
    sort_descending: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortDescending', 'style': 'form', 'explode': True }})
    sort_order: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1ServicesRequest:
    query_params: GetConsumerV1ServicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1ServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
