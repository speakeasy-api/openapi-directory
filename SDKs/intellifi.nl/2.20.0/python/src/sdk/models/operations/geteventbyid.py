import dataclasses
from typing import Optional
from ..shared import event as shared_event


@dataclasses.dataclass
class GetEventByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventByIDRequest:
    path_params: GetEventByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event: Optional[shared_event.Event] = dataclasses.field(default=None)
    
