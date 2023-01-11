import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class PutCourseMappingsOfferingIDExternalCourseIDPathParams:
    external_course_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalCourseId', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCourseMappingsOfferingIDExternalCourseIDRequest:
    path_params: PutCourseMappingsOfferingIDExternalCourseIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutCourseMappingsOfferingIDExternalCourseIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    put_course_mappings_offering_id_external_course_id_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
