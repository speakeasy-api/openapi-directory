import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleaudiencetargetingsetting as shared_googleaudiencetargetingsetting


@dataclass_json
@dataclasses.dataclass
class GoogleAudienceGroup:
    r"""GoogleAudienceGroup
    Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other.
    """
    
    settings: Optional[list[shared_googleaudiencetargetingsetting.GoogleAudienceTargetingSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
