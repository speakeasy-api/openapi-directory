import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import advertiser as shared_advertiser


@dataclass_json
@dataclasses.dataclass
class AdvertisersListResponse:
    r"""AdvertisersListResponse
    Advertiser List Response
    """
    
    advertisers: Optional[list[shared_advertiser.Advertiser]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertisers') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
