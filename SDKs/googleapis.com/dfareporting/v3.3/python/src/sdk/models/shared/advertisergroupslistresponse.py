import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import advertisergroup as shared_advertisergroup


@dataclass_json
@dataclasses.dataclass
class AdvertiserGroupsListResponse:
    r"""AdvertiserGroupsListResponse
    Advertiser Group List Response
    """
    
    advertiser_groups: Optional[list[shared_advertisergroup.AdvertiserGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserGroups') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
