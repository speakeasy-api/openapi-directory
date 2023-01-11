import dataclasses
from typing import Any,Optional
from ..shared import story as shared_story


@dataclasses.dataclass
class StoryIDFilePostPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDFilePostQueryParams:
    include_outline: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_outline', 'style': 'form', 'explode': True }})
    obsolete_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'obsolete_id', 'style': 'form', 'explode': True }})
    replace_existing: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'replace_existing', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StoryIDFilePostRequest:
    path_params: StoryIDFilePostPathParams = dataclasses.field()
    query_params: StoryIDFilePostQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class StoryIDFilePostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    story: Optional[shared_story.Story] = dataclasses.field(default=None)
    
