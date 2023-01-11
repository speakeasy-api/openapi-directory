import dataclasses
from typing import Optional
from ..shared import commentlist as shared_commentlist
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCommentsPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCommentsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCommentsRequest:
    path_params: GetCommentsPathParams = dataclasses.field()
    query_params: GetCommentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comment_list: Optional[shared_commentlist.CommentList] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
