import dataclasses
from typing import Any,Optional
from ..shared import session as shared_session


@dataclasses.dataclass
class StoryIDSessionsGetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDSessionsGetQueryParams:
    include_relationships: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_relationships', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StoryIDSessionsGetRequest:
    path_params: StoryIDSessionsGetPathParams = dataclasses.field()
    query_params: StoryIDSessionsGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDSessionsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    sessions: Optional[list[shared_session.Session]] = dataclasses.field(default=None)
    
