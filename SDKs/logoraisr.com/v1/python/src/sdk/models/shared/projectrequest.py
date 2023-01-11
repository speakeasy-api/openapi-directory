import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import process as shared_process


@dataclass_json
@dataclasses.dataclass
class ProjectRequest:
    file_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_id') }})
    project_title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_title') }})
    process: Optional[shared_process.Process] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('process') }})
    
