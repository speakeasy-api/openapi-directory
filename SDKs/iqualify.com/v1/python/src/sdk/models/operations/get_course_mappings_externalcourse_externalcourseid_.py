import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCourseMappingsExternalcourseExternalCourseIDPathParams:
    external_course_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalCourseId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCourseMappingsExternalcourseExternalCourseIDRequest:
    path_params: GetCourseMappingsExternalcourseExternalCourseIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCourseMappingsExternalcourseExternalCourseIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_course_mappings_externalcourse_external_course_id_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
