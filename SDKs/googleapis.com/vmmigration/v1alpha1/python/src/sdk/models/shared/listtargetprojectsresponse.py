import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetproject as shared_targetproject


@dataclass_json
@dataclasses.dataclass
class ListTargetProjectsResponse:
    r"""ListTargetProjectsResponse
    Response message for 'ListTargetProjects' call.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    target_projects: Optional[list[shared_targetproject.TargetProject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetProjects') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
