import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import coursematerial as shared_coursematerial


@dataclass_json
@dataclasses.dataclass
class CourseMaterialSet:
    r"""CourseMaterialSet
    A set of materials that appears on the \"About\" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole.
    """
    
    materials: Optional[list[shared_coursematerial.CourseMaterial]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
