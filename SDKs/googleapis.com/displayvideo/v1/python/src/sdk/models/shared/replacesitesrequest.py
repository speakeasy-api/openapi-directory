import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import site as shared_site


@dataclass_json
@dataclasses.dataclass
class ReplaceSitesRequestInput:
    r"""ReplaceSitesRequestInput
    Request message for SiteService.ReplaceSites.
    """
    
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    new_sites: Optional[list[shared_site.SiteInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSites') }})
    partner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    
