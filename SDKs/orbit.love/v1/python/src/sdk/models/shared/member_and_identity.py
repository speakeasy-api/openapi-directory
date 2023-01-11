import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identity as shared_identity
from ..shared import member as shared_member


@dataclass_json
@dataclasses.dataclass
class MemberAndIdentity:
    identity: Optional[shared_identity.Identity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    member: Optional[shared_member.Member] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    
