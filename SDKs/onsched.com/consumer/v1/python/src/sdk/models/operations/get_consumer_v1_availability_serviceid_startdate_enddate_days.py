import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import availabilitydayviewmodel as shared_availabilitydayviewmodel


@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysPathParams:
    end_date: datetime = dataclasses.field(metadata={'path_param': { 'field_name': 'endDate', 'style': 'simple', 'explode': False }})
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    start_date: datetime = dataclasses.field(metadata={'path_param': { 'field_name': 'startDate', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysQueryParams:
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceId', 'style': 'form', 'explode': True }})
    tz_offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tzOffset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysRequest:
    path_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysPathParams = dataclasses.field()
    query_params: GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    availability_day_view_model: Optional[shared_availabilitydayviewmodel.AvailabilityDayViewModel] = dataclasses.field(default=None)
    
