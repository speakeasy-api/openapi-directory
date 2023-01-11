import dataclasses
from typing import Optional
from ..shared import calendarblockinputmodel as shared_calendarblockinputmodel
from ..shared import calendarblockviewmodel as shared_calendarblockviewmodel


@dataclasses.dataclass
class PutSetupV1CalendarsBlockIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1CalendarsBlockIDRequests:
    calendar_block_input_model: Optional[shared_calendarblockinputmodel.CalendarBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    calendar_block_input_model1: Optional[shared_calendarblockinputmodel.CalendarBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    calendar_block_input_model2: Optional[shared_calendarblockinputmodel.CalendarBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    calendar_block_input_model3: Optional[shared_calendarblockinputmodel.CalendarBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1CalendarsBlockIDRequest:
    path_params: PutSetupV1CalendarsBlockIDPathParams = dataclasses.field()
    request: Optional[PutSetupV1CalendarsBlockIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1CalendarsBlockIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calendar_block_view_model: Optional[shared_calendarblockviewmodel.CalendarBlockViewModel] = dataclasses.field(default=None)
    
