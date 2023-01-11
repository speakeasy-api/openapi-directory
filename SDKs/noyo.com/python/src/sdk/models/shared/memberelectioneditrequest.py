import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MemberElectionEditRequestStatusEnum(str, Enum):
    ENROLLING = "enrolling"
    WAIVING = "waiving"


@dataclass_json
@dataclasses.dataclass
class MemberElectionEditRequest:
    plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_id') }})
    status: Optional[MemberElectionEditRequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    volume: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
