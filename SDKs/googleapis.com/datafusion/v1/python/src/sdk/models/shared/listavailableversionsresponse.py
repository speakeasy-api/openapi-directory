import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import version as shared_version


@dataclass_json
@dataclasses.dataclass
class ListAvailableVersionsResponse:
    r"""ListAvailableVersionsResponse
    Response message for the list available versions request.
    """
    
    available_versions: Optional[list[shared_version.Version]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableVersions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
