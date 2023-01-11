import dataclasses
from typing import Optional
from ..shared import calendar as shared_calendar


@dataclasses.dataclass
class GetCalendarsQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCalendarsRequest:
    query_params: GetCalendarsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCalendarsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calendars: Optional[list[shared_calendar.Calendar]] = dataclasses.field(default=None)
    
