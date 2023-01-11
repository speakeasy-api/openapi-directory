import dataclasses
from typing import Optional
from ..shared import scheduleviewmodel as shared_scheduleviewmodel


@dataclasses.dataclass
class PutSetupV1CalendarsIDRecoverPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1CalendarsIDRecoverRequest:
    path_params: PutSetupV1CalendarsIDRecoverPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutSetupV1CalendarsIDRecoverResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schedule_view_model: Optional[shared_scheduleviewmodel.ScheduleViewModel] = dataclasses.field(default=None)
    
