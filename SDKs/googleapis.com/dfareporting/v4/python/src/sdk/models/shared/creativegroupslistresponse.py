import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creativegroup as shared_creativegroup


@dataclass_json
@dataclasses.dataclass
class CreativeGroupsListResponse:
    r"""CreativeGroupsListResponse
    Creative Group List Response
    """
    
    creative_groups: Optional[list[shared_creativegroup.CreativeGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeGroups') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
