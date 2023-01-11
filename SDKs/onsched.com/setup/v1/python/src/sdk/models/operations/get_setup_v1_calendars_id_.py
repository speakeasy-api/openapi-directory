import dataclasses
from typing import Optional
from ..shared import scheduleviewmodel as shared_scheduleviewmodel


@dataclasses.dataclass
class GetSetupV1CalendarsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1CalendarsIDRequest:
    path_params: GetSetupV1CalendarsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1CalendarsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schedule_view_model: Optional[shared_scheduleviewmodel.ScheduleViewModel] = dataclasses.field(default=None)
    
