import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import combinedaudiencetargetingsetting as shared_combinedaudiencetargetingsetting


@dataclass_json
@dataclasses.dataclass
class CombinedAudienceGroup:
    r"""CombinedAudienceGroup
    Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other.
    """
    
    settings: Optional[list[shared_combinedaudiencetargetingsetting.CombinedAudienceTargetingSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
