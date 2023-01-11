import dataclasses
from typing import Optional
from ..shared import servicecalendarviewmodel as shared_servicecalendarviewmodel


@dataclasses.dataclass
class DeleteSetupV1ServicesCalendarIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1ServicesCalendarIDRequest:
    path_params: DeleteSetupV1ServicesCalendarIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1ServicesCalendarIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_calendar_view_model: Optional[shared_servicecalendarviewmodel.ServiceCalendarViewModel] = dataclasses.field(default=None)
    
