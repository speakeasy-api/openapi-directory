import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import site as shared_site


@dataclass_json
@dataclasses.dataclass
class SitesListResponse:
    r"""SitesListResponse
    Site List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    sites: Optional[list[shared_site.Site]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sites') }})
    
