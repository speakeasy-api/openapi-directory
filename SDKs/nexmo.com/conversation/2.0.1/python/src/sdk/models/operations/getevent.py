import dataclasses
from typing import Optional
from ..shared import event_retrieved as shared_event_retrieved


@dataclasses.dataclass
class GetEventPathParams:
    conversation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventRequest:
    path_params: GetEventPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event_retrieved: Optional[shared_event_retrieved.EventRetrieved] = dataclasses.field(default=None)
    
