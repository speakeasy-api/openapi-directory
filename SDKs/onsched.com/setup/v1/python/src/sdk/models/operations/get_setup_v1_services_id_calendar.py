import dataclasses
from typing import Optional
from ..shared import servicecalendarviewmodel as shared_servicecalendarviewmodel


@dataclasses.dataclass
class GetSetupV1ServicesIDCalendarPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1ServicesIDCalendarQueryParams:
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1ServicesIDCalendarRequest:
    path_params: GetSetupV1ServicesIDCalendarPathParams = dataclasses.field()
    query_params: GetSetupV1ServicesIDCalendarQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1ServicesIDCalendarResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_calendar_view_model: Optional[shared_servicecalendarviewmodel.ServiceCalendarViewModel] = dataclasses.field(default=None)
    
