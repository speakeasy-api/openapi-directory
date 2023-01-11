import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ad as shared_ad


@dataclass_json
@dataclasses.dataclass
class AdsListResponse:
    r"""AdsListResponse
    Ad List Response
    """
    
    ads: Optional[list[shared_ad.Ad]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ads') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
