import dataclasses
from typing import Optional
from ..shared import calendarblockinputmodel as shared_calendarblockinputmodel
from ..shared import resourceblockviewmodel as shared_resourceblockviewmodel


@dataclasses.dataclass
class PostSetupV1CalendarsIDBlockPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1CalendarsIDBlockRequests:
    calendar_block_input_model: Optional[shared_calendarblockinputmodel.CalendarBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    calendar_block_input_model1: Optional[shared_calendarblockinputmodel.CalendarBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    calendar_block_input_model2: Optional[shared_calendarblockinputmodel.CalendarBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    calendar_block_input_model3: Optional[shared_calendarblockinputmodel.CalendarBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1CalendarsIDBlockRequest:
    path_params: PostSetupV1CalendarsIDBlockPathParams = dataclasses.field()
    request: Optional[PostSetupV1CalendarsIDBlockRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1CalendarsIDBlockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_block_view_model: Optional[shared_resourceblockviewmodel.ResourceBlockViewModel] = dataclasses.field(default=None)
    
