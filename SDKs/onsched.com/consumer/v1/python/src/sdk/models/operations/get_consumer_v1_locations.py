import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetConsumerV1LocationsQueryParams:
    ignore_primary: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ignorePrimary', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    nearest_to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nearestTo', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    proximity: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proximity', 'style': 'form', 'explode': True }})
    region_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionId', 'style': 'form', 'explode': True }})
    service_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceId', 'style': 'form', 'explode': True }})
    units: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'units', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1LocationsRequest:
    query_params: GetConsumerV1LocationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1LocationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
