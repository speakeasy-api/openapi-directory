import dataclasses
from typing import Optional
from ..shared import calendarblockviewmodel as shared_calendarblockviewmodel


@dataclasses.dataclass
class DeleteSetupV1CalendarsBlockIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1CalendarsBlockIDRequest:
    path_params: DeleteSetupV1CalendarsBlockIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1CalendarsBlockIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calendar_block_view_model: Optional[shared_calendarblockviewmodel.CalendarBlockViewModel] = dataclasses.field(default=None)
    
