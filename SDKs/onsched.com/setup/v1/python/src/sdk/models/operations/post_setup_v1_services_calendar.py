import dataclasses
from typing import Optional
from ..shared import servicecalendarinputmodel as shared_servicecalendarinputmodel
from ..shared import servicecalendarviewmodel as shared_servicecalendarviewmodel


@dataclasses.dataclass
class PostSetupV1ServicesCalendarRequests:
    service_calendar_input_model: Optional[shared_servicecalendarinputmodel.ServiceCalendarInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_calendar_input_model1: Optional[shared_servicecalendarinputmodel.ServiceCalendarInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_calendar_input_model2: Optional[shared_servicecalendarinputmodel.ServiceCalendarInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_calendar_input_model3: Optional[shared_servicecalendarinputmodel.ServiceCalendarInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ServicesCalendarRequest:
    request: Optional[PostSetupV1ServicesCalendarRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ServicesCalendarResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_calendar_view_model: Optional[shared_servicecalendarviewmodel.ServiceCalendarViewModel] = dataclasses.field(default=None)
    
