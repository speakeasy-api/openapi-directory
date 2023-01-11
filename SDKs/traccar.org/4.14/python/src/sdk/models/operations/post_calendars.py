import dataclasses
from typing import Optional
from ..shared import calendar as shared_calendar


@dataclasses.dataclass
class PostCalendarsRequest:
    request: shared_calendar.Calendar = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCalendarsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calendar: Optional[shared_calendar.Calendar] = dataclasses.field(default=None)
    
