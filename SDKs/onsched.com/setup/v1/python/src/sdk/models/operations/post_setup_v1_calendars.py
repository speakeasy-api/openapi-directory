import dataclasses
from typing import Optional
from ..shared import scheduleinputmodel as shared_scheduleinputmodel
from ..shared import scheduleviewmodel as shared_scheduleviewmodel


@dataclasses.dataclass
class PostSetupV1CalendarsRequests:
    schedule_input_model: Optional[shared_scheduleinputmodel.ScheduleInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    schedule_input_model1: Optional[shared_scheduleinputmodel.ScheduleInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    schedule_input_model2: Optional[shared_scheduleinputmodel.ScheduleInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    schedule_input_model3: Optional[shared_scheduleinputmodel.ScheduleInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1CalendarsRequest:
    request: Optional[PostSetupV1CalendarsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1CalendarsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schedule_view_model: Optional[shared_scheduleviewmodel.ScheduleViewModel] = dataclasses.field(default=None)
    
