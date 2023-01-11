import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import member as shared_member

class PostActivityWithMemberActivityTypeEnum(str, Enum):
    CONTENT = "content"


@dataclass_json
@dataclasses.dataclass
class PostActivityWithMember:
    activity_type: PostActivityWithMemberActivityTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity_type') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    member: Optional[shared_member.Member] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    occurred_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurred_at') }})
    
