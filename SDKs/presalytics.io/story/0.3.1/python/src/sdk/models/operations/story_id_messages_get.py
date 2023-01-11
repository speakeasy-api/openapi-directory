import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryIDMessagesGetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDMessagesGetRequest:
    path_params: StoryIDMessagesGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDMessagesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messages: Optional[list[Any]] = dataclasses.field(default=None)
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
