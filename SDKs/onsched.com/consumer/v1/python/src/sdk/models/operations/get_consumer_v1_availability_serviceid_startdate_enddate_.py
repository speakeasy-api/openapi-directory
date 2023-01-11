import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import availabilityviewmodel as shared_availabilityviewmodel


@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDatePathParams:
    end_date: datetime = dataclasses.field(metadata={'path_param': { 'field_name': 'endDate', 'style': 'simple', 'explode': False }})
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    start_date: datetime = dataclasses.field(metadata={'path_param': { 'field_name': 'startDate', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateQueryParams:
    day_availability: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dayAvailability', 'style': 'form', 'explode': True }})
    day_availability_start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dayAvailabilityStartDate', 'style': 'form', 'explode': True }})
    destination: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    end_time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    first_day_available: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'firstDayAvailable', 'style': 'form', 'explode': True }})
    full_server_based_availability: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fullServerBasedAvailability', 'style': 'form', 'explode': True }})
    interval: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    resource_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceGroupId', 'style': 'form', 'explode': True }})
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceId', 'style': 'form', 'explode': True }})
    resource_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceIds', 'style': 'form', 'explode': True }})
    round_robin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'roundRobin', 'style': 'form', 'explode': True }})
    start_time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    tz_offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tzOffset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateRequest:
    path_params: GetConsumerV1AvailabilityServiceIDStartDateEndDatePathParams = dataclasses.field()
    query_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    availability_view_model: Optional[shared_availabilityviewmodel.AvailabilityViewModel] = dataclasses.field(default=None)
    
