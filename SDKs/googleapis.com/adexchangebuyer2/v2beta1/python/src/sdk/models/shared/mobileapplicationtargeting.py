import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstpartymobileapplicationtargeting as shared_firstpartymobileapplicationtargeting


@dataclass_json
@dataclasses.dataclass
class MobileApplicationTargeting:
    r"""MobileApplicationTargeting
    Mobile application targeting settings.
    """
    
    first_party_targeting: Optional[shared_firstpartymobileapplicationtargeting.FirstPartyMobileApplicationTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstPartyTargeting') }})
    
