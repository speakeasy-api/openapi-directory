import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailablePathParams:
    end_date: datetime = dataclasses.field(metadata={'path_param': { 'field_name': 'endDate', 'style': 'simple', 'explode': False }})
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    start_date: datetime = dataclasses.field(metadata={'path_param': { 'field_name': 'startDate', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableQueryParams:
    duration: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    full_server_based_availability: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fullServerBasedAvailability', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceId', 'style': 'form', 'explode': True }})
    tz_offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tzOffset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableRequest:
    path_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailablePathParams = dataclasses.field()
    query_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    unavailable_time_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
