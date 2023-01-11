import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GetConsumerV1ServicesIDAllocationsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1ServicesIDAllocationsQueryParams:
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceId', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1ServicesIDAllocationsRequest:
    path_params: GetConsumerV1ServicesIDAllocationsPathParams = dataclasses.field()
    query_params: GetConsumerV1ServicesIDAllocationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1ServicesIDAllocationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_allocation_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
