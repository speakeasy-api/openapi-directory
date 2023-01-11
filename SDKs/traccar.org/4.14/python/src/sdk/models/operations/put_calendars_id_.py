import dataclasses
from typing import Optional
from ..shared import calendar as shared_calendar


@dataclasses.dataclass
class PutCalendarsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCalendarsIDRequest:
    path_params: PutCalendarsIDPathParams = dataclasses.field()
    request: shared_calendar.Calendar = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCalendarsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calendar: Optional[shared_calendar.Calendar] = dataclasses.field(default=None)
    
