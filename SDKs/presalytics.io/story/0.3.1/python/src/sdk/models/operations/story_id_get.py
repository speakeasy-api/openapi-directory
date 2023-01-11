import dataclasses
from typing import Any,Optional
from ..shared import story as shared_story


@dataclasses.dataclass
class StoryIDGetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDGetQueryParams:
    full: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    include_outline: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_outline', 'style': 'form', 'explode': True }})
    include_relationships: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_relationships', 'style': 'form', 'explode': True }})
    refresh_cache: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'refresh_cache', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StoryIDGetRequest:
    path_params: StoryIDGetPathParams = dataclasses.field()
    query_params: StoryIDGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    story: Optional[shared_story.Story] = dataclasses.field(default=None)
    
