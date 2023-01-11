import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import advertiser as shared_advertiser


@dataclass_json
@dataclasses.dataclass
class ListAdvertisersResponse:
    advertisers: Optional[list[shared_advertiser.Advertiser]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertisers') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
