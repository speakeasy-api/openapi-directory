import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import gist_comment as shared_gist_comment


@dataclasses.dataclass
class GistsListCommentsPathParams:
    gist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GistsListCommentsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GistsListCommentsRequest:
    path_params: GistsListCommentsPathParams = dataclasses.field()
    query_params: GistsListCommentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GistsListCommentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    gist_comments: Optional[list[shared_gist_comment.GistComment]] = dataclasses.field(default=None)
    
