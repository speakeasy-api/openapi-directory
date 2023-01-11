import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import memberrestriction as shared_memberrestriction


@dataclass_json
@dataclasses.dataclass
class SecuritySettingsInput:
    r"""SecuritySettingsInput
    The definition of security settings.
    """
    
    member_restriction: Optional[shared_memberrestriction.MemberRestriction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberRestriction') }})
    
