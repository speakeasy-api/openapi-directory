import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaigncreativeassociation as shared_campaigncreativeassociation


@dataclass_json
@dataclasses.dataclass
class CampaignCreativeAssociationsListResponse:
    r"""CampaignCreativeAssociationsListResponse
    Campaign Creative Association List Response
    """
    
    campaign_creative_associations: Optional[list[shared_campaigncreativeassociation.CampaignCreativeAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignCreativeAssociations') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
