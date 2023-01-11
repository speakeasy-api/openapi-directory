import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directorysite as shared_directorysite


@dataclass_json
@dataclasses.dataclass
class DirectorySitesListResponse:
    r"""DirectorySitesListResponse
    Directory Site List Response
    """
    
    directory_sites: Optional[list[shared_directorysite.DirectorySite]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directorySites') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
