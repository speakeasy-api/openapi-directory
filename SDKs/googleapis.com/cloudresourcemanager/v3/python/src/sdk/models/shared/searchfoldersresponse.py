import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import folder as shared_folder


@dataclass_json
@dataclasses.dataclass
class SearchFoldersResponse:
    r"""SearchFoldersResponse
    The response message for searching folders.
    """
    
    folders: Optional[list[shared_folder.Folder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
