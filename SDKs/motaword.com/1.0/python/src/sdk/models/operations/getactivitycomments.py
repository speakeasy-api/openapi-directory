import dataclasses
from typing import Optional
from ..shared import commentlist as shared_commentlist
from ..shared import error as shared_error


@dataclasses.dataclass
class GetActivityCommentsPathParams:
    activity_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetActivityCommentsRequest:
    path_params: GetActivityCommentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActivityCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comment_list: Optional[shared_commentlist.CommentList] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
