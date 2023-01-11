import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import courseworkmaterial as shared_courseworkmaterial


@dataclass_json
@dataclasses.dataclass
class ListCourseWorkMaterialResponse:
    r"""ListCourseWorkMaterialResponse
    Response when listing course work material.
    """
    
    course_work_material: Optional[list[shared_courseworkmaterial.CourseWorkMaterial]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseWorkMaterial') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
