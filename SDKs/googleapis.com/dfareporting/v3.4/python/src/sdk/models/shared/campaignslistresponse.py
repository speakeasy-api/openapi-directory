import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaign as shared_campaign


@dataclass_json
@dataclasses.dataclass
class CampaignsListResponse:
    r"""CampaignsListResponse
    Campaign List Response
    """
    
    campaigns: Optional[list[shared_campaign.Campaign]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaigns') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
