import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import coursemetaresponse as shared_coursemetaresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class PutCoursesContentIDMetadataLevelPathParams:
    content_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutCoursesContentIDMetadataLevelRequestBody:
    level: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclasses.dataclass
class PutCoursesContentIDMetadataLevelRequest:
    path_params: PutCoursesContentIDMetadataLevelPathParams = dataclasses.field()
    request: PutCoursesContentIDMetadataLevelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCoursesContentIDMetadataLevelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    course_meta_response: Optional[shared_coursemetaresponse.CourseMetaResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
