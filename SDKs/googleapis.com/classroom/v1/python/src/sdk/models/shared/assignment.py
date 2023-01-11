import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import drivefolder as shared_drivefolder


@dataclass_json
@dataclasses.dataclass
class Assignment:
    r"""Assignment
    Additional details for assignments.
    """
    
    student_work_folder: Optional[shared_drivefolder.DriveFolder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studentWorkFolder') }})
    
