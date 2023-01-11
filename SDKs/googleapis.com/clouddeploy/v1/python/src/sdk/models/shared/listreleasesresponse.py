import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import release as shared_release


@dataclass_json
@dataclasses.dataclass
class ListReleasesResponse:
    r"""ListReleasesResponse
    The response object from `ListReleases`.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    releases: Optional[list[shared_release.Release]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releases') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
