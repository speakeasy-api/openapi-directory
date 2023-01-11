import dataclasses
from typing import Any,Optional
from ..shared import story as shared_story


@dataclasses.dataclass
class StoryPostFileJSONQueryParams:
    include_outline: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_outline', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StoryPostFileJSONRequest:
    query_params: StoryPostFileJSONQueryParams = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StoryPostFileJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    story: Optional[shared_story.Story] = dataclasses.field(default=None)
    
