import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activity_with_member as shared_activity_with_member
from ..shared import post_activity_with_member as shared_post_activity_with_member
from ..shared import identity as shared_identity


@dataclass_json
@dataclasses.dataclass
class ActivityAndIdentity:
    activity: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    identity: Optional[shared_identity.Identity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    
