import dataclasses
from typing import Optional
from ..shared import event as shared_event


@dataclasses.dataclass
class GetEventsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventsIDRequest:
    path_params: GetEventsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event: Optional[shared_event.Event] = dataclasses.field(default=None)
    
