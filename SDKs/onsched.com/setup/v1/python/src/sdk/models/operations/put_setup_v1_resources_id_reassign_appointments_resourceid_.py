import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import appointmentviewmodel as shared_appointmentviewmodel


@dataclasses.dataclass
class PutSetupV1ResourcesIDReassignAppointmentsResourceIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    resource_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'resourceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesIDReassignAppointmentsResourceIDQueryParams:
    calendar_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'calendarId', 'style': 'form', 'explode': True }})
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesIDReassignAppointmentsResourceIDRequest:
    path_params: PutSetupV1ResourcesIDReassignAppointmentsResourceIDPathParams = dataclasses.field()
    query_params: PutSetupV1ResourcesIDReassignAppointmentsResourceIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PutSetupV1ResourcesIDReassignAppointmentsResourceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    appointment_view_models: Optional[list[shared_appointmentviewmodel.AppointmentViewModel]] = dataclasses.field(default=None)
    
