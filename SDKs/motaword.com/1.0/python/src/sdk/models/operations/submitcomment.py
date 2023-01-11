import dataclasses
from typing import Optional
from ..shared import comment as shared_comment
from ..shared import error as shared_error


@dataclasses.dataclass
class SubmitCommentPathParams:
    activity_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubmitCommentRequestBody:
    comment: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'comment' }})
    

@dataclasses.dataclass
class SubmitCommentRequest:
    path_params: SubmitCommentPathParams = dataclasses.field()
    request: Optional[SubmitCommentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class SubmitCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comment: Optional[shared_comment.Comment] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
