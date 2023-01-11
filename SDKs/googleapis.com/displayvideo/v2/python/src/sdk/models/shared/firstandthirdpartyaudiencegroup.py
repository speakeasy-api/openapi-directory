import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstandthirdpartyaudiencetargetingsetting as shared_firstandthirdpartyaudiencetargetingsetting


@dataclass_json
@dataclasses.dataclass
class FirstAndThirdPartyAudienceGroup:
    r"""FirstAndThirdPartyAudienceGroup
    Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other.
    """
    
    settings: Optional[list[shared_firstandthirdpartyaudiencetargetingsetting.FirstAndThirdPartyAudienceTargetingSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
