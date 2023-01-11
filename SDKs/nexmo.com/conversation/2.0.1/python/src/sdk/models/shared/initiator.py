import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InitiatorJoined:
    is_system: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSystem') }})
    member_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_id') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    

@dataclass_json
@dataclasses.dataclass
class Initiator:
    joined: Optional[InitiatorJoined] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('joined') }})
    
