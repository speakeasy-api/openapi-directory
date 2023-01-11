import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import windowavailabilityviewmodel as shared_windowavailabilityviewmodel


@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsPathParams:
    end_date: datetime = dataclasses.field(metadata={'path_param': { 'field_name': 'endDate', 'style': 'simple', 'explode': False }})
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    start_date: datetime = dataclasses.field(metadata={'path_param': { 'field_name': 'startDate', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsQueryParams:
    destination: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    interval: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    resource_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceGroupId', 'style': 'form', 'explode': True }})
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceId', 'style': 'form', 'explode': True }})
    resource_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceIds', 'style': 'form', 'explode': True }})
    round_robin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'roundRobin', 'style': 'form', 'explode': True }})
    tz_offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tzOffset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsRequest:
    path_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsPathParams = dataclasses.field()
    query_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    window_availability_view_model: Optional[shared_windowavailabilityviewmodel.WindowAvailabilityViewModel] = dataclasses.field(default=None)
    
