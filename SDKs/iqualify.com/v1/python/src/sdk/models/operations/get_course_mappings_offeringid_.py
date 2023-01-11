import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCourseMappingsOfferingIDPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCourseMappingsOfferingIDRequest:
    path_params: GetCourseMappingsOfferingIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCourseMappingsOfferingIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_course_mappings_offering_id_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
