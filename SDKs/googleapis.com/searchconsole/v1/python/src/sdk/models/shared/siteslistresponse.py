import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import wmxsite as shared_wmxsite


@dataclass_json
@dataclasses.dataclass
class SitesListResponse:
    r"""SitesListResponse
    List of sites with access level information.
    """
    
    site_entry: Optional[list[shared_wmxsite.WmxSite]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteEntry') }})
    
