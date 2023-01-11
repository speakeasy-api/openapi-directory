import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MemberElectionResultMemberTypeEnum(str, Enum):
    DEPENDENT = "dependent"
    EMPLOYEE = "employee"

class MemberElectionResultStatusEnum(str, Enum):
    ENROLLING = "enrolling"
    WAIVING = "waiving"


@dataclass_json
@dataclasses.dataclass
class MemberElectionResult:
    created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    member_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_id') }})
    member_type: MemberElectionResultMemberTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_type') }})
    modified: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    plan_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_id') }})
    status: MemberElectionResultStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    volume: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
