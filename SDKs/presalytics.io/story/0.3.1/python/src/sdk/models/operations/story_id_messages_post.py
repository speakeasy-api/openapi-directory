import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryIDMessagesPostPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDMessagesPostRequest:
    path_params: StoryIDMessagesPostPathParams = dataclasses.field()
    request: str = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StoryIDMessagesPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
