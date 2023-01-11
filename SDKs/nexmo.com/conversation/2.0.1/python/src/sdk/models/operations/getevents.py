import dataclasses
from typing import Optional
from ..shared import event_retrieved as shared_event_retrieved


@dataclasses.dataclass
class GetEventsPathParams:
    conversation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventsRequest:
    path_params: GetEventsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event_retrieveds: Optional[list[shared_event_retrieved.EventRetrieved]] = dataclasses.field(default=None)
    
