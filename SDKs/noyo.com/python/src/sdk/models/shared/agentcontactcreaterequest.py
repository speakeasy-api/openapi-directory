import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AgentContactCreateRequestTypesEnum(str, Enum):
    BILLING = "billing"
    COMPANY = "company"
    EXECUTIVE = "executive"
    ONLINE = "online"


@dataclass_json
@dataclasses.dataclass
class AgentContactCreateRequest:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    types: list[AgentContactCreateRequestTypesEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    
