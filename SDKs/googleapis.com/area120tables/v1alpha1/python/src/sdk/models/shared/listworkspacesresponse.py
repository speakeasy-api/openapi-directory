import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspace as shared_workspace


@dataclass_json
@dataclasses.dataclass
class ListWorkspacesResponse:
    r"""ListWorkspacesResponse
    Response message for TablesService.ListWorkspaces.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    workspaces: Optional[list[shared_workspace.Workspace]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaces') }})
    
