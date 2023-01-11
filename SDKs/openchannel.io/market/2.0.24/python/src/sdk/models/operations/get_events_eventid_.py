import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetEventsEventIDPathParams:
    event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventsEventIDRequest:
    path_params: GetEventsEventIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsEventIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
