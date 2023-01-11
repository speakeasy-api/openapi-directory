import dataclasses
from typing import Any,Optional
from ..shared import event as shared_event


@dataclasses.dataclass
class StoryIDEventsGetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDEventsGetRequest:
    path_params: StoryIDEventsGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDEventsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None)
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
