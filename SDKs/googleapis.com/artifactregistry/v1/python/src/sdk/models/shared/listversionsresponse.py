import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import version as shared_version


@dataclass_json
@dataclasses.dataclass
class ListVersionsResponse:
    r"""ListVersionsResponse
    The response from listing versions.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    versions: Optional[list[shared_version.Version]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
