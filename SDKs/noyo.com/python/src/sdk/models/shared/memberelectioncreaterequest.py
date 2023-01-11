import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MemberElectionCreateRequestMemberTypeEnum(str, Enum):
    DEPENDENT = "dependent"
    EMPLOYEE = "employee"

class MemberElectionCreateRequestStatusEnum(str, Enum):
    ENROLLING = "enrolling"
    WAIVING = "waiving"


@dataclass_json
@dataclasses.dataclass
class MemberElectionCreateRequest:
    member_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_id') }})
    member_type: MemberElectionCreateRequestMemberTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_type') }})
    status: MemberElectionCreateRequestStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    volume: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
