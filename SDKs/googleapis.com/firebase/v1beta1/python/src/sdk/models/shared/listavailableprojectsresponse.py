import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectinfo as shared_projectinfo


@dataclass_json
@dataclasses.dataclass
class ListAvailableProjectsResponse:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    project_info: Optional[list[shared_projectinfo.ProjectInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectInfo') }})
    
