import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GetConsumerV1AppointmentsQueryParams:
    booked_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bookedBy', 'style': 'form', 'explode': True }})
    calendar_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'calendarId', 'style': 'form', 'explode': True }})
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customerId', 'style': 'form', 'explode': True }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    lastname: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lastname', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phone', 'style': 'form', 'explode': True }})
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceId', 'style': 'form', 'explode': True }})
    service_allocation_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceAllocationId', 'style': 'form', 'explode': True }})
    service_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceId', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1AppointmentsRequest:
    query_params: GetConsumerV1AppointmentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1AppointmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    appointment_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
