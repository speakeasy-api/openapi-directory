import dataclasses
from typing import Optional
from ..shared import coursemetaresponse as shared_coursemetaresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCoursesContentIDPathParams:
    content_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCoursesContentIDRequest:
    path_params: GetCoursesContentIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCoursesContentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    course_meta_response: Optional[shared_coursemetaresponse.CourseMetaResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
