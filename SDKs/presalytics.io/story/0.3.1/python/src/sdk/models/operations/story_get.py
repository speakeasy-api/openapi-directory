import dataclasses
from typing import Any,Optional
from ..shared import story as shared_story


@dataclasses.dataclass
class StoryGetQueryParams:
    include_outline: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_outline', 'style': 'form', 'explode': True }})
    include_relationships: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_relationships', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StoryGetRequest:
    query_params: StoryGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    stories: Optional[list[shared_story.Story]] = dataclasses.field(default=None)
    
