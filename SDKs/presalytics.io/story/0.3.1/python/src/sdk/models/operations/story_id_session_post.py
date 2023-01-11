import dataclasses
from typing import Any,Optional
from ..shared import session as shared_session


@dataclasses.dataclass
class StoryIDSessionPostPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDSessionPostRequest:
    path_params: StoryIDSessionPostPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StoryIDSessionPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    session: Optional[shared_session.Session] = dataclasses.field(default=None)
    
